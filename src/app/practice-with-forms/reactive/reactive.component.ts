import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  myForm : FormGroup  


  answers = [{
    type: 'yes',
    text : 'да'
  },{
    type: 'no',
    text : 'нет'
  }]
  constructor() { 
   
  }

  ngOnInit() {
    this.myForm =  new FormGroup(
     { 
       userData: new FormGroup( {
        email: new FormControl('', [Validators.email, Validators.required] , [this.forbidenEmail]),
        password : new FormControl('', [Validators.required ,this.forbidenPassword]),
       }),

       country : new FormControl('ru'),
       answer : new FormControl ('yes')

     }
    )

  
  }

  forbidenPassword(control:FormControl): { [s:string] : boolean} {
    
    if(control.value.length <= 4 ){
      return {
        'lengthError' : true
       }
    }else{
      return null;
    }

  }
  forbidenEmail(control:FormControl): Promise<any> | Observable<any> {
    

    const promise = new Promise<any>( (resolve , reject)=>{
          setTimeout(() => {
              if(control.value ===  'test@test.com'){
                  resolve ( {'emailIsForbbiden' : true });
              }else{
                resolve(null);
              }
          }, 2000);
    } );
    return promise;

  }
  onSubmit(){
    console.log(this.myForm)
  }
}
