import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor( private router:Router , private route : ActivatedRoute , private authService:AuthService ) { }

  ngOnInit() {
  }
  toCarPage(){
    this.router.navigate(['cars'], {relativeTo : this.route})
  }
  auth(){
    this.authService.authenticated = !this.authService.authenticated
  }
}
