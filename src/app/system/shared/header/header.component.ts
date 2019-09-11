import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date = new Date();
  user:User
  constructor(private router: Router,
              private authService:AuthService) { }

  onLogOut() {
    this.authService.logOut();
    debugger
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.user = JSON.parse( localStorage.getItem('user'));
  }

}
