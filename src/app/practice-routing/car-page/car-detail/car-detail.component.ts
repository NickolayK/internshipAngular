import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarRoutingService } from '../../car-routing.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car:any ;

  constructor(private route : ActivatedRoute , private carService : CarRoutingService , private router : Router) { }
  
openCarDetail(){
  this.router.navigate(['../cars', this.car.id +1], 
  {queryParams : {
                    year:this.car.year,
                    color: this.car.color
                  }, 
   fragment: 'top'
});
}

  ngOnInit() {
    this.route.params.subscribe( (params : Params)=>{
     
        this.car = this.carService.getCarById(+params['id']);
        this.route.queryParams.subscribe( (queryParams )=>{
          console.log(queryParams)
        })
    })
  }

}
