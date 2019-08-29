import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  errorMesage:string

  ngOnInit() {
    this.route.data.subscribe( (data:Params)=>{
        this.errorMesage = data.message;
    })
  }

}
