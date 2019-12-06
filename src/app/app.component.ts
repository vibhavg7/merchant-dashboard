import { Component } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'merchant-dashboard';

  constructor(private authService: UserService,private router:Router)
  {

  }

  togglemenu() {
    $("#wrapper").toggleClass("toggled");
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get userName() {
    let merchant = JSON.parse(localStorage.getItem('merchant'));
    return (merchant) ? merchant.store_name : '';
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }

}
