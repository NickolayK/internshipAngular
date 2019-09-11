import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/models/message.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('5s', style({ opacity: 1 })),
        ]),
        transition(':leave', [
          animate('5s', style({ opacity: 0 }))
        ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message: Message

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }


  ngOnInit() {

    this.myForm = new FormGroup({
      'email': new FormControl(null, [Validators.email ,Validators.required]),
      'password': new FormControl(null, [Validators.required,Validators.minLength(6)])
    })

    this.message = new Message('', 'danger');

    this.route.queryParams
    .subscribe( (params: Params)=>{
          if(params['nowCanLogin']){
              this.showMessage('Теперь вы можете зайти в систему', 'success')
          }
    } )
  }

  private showMessage(text: string , type: string = 'danger')  {
    this.message = new Message(text , type);
    setTimeout(() => {
        this.message.text = '';
    }, 5000);
  }

  onSubmit(){
    const formData = this.myForm.value;
    this.userService.getUserByEmail(formData.email).subscribe( (user:User)=>{
        if(user){
          if( user.password === formData.password){
            this.authService.login(user);
            this.message.text = '';
            this.router.navigate(['/system','bill'])

          }else {
            this.showMessage('Пароль не верный' , 'danger')
          }
        }else {
          this.showMessage('Такого пользователя не существует' , 'danger')
        }
    })
  }

}
