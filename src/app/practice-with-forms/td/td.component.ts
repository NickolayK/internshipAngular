import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent implements OnInit {
  @ViewChild('myForm',{static :false}) form:NgForm

  answers = [{
    type: ' yes',
    text : 'да'
  },{
    type: 'no',
    text : 'нет'
  }]

  defaultAnswer = 'no';
  defaultCountry = 'ua';
  formData = {};
  isSubmited = false;
  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm){
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset()
  }
  addEmail(){
    this.form.form.patchValue({ userData: {'email': 'rand@mail.com'}})
  }
}
