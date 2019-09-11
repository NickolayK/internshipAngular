import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService,
              private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required , Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false , [Validators.requiredTrue])
    })
  }


  onRegistration() {
    console.log(this.form);
    const user = this.form.value;
    this.userService.createNewUser(user).subscribe( (res:User)=>{
      console.log(res);
      this.router.navigate(['/login'], {
        queryParams:{
          nowCanLogin: 'true'
      }
    });
    })

  }



  forbiddenEmails( control : FormControl):Observable<any> | Promise<any>  {  
    let promise = new Promise( (res, rej)=>{
      this.userService.getUserByEmail(control.value)
      .subscribe( user =>{
          if(user){
              
            res({
              'alreadyExist' : true
            })       
          }else {
            res(null)  
          }
      })
    })
      return promise;
  }

}
