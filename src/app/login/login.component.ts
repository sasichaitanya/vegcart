import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PubsubService } from '../services/pub-sub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userDetails: any;
  showWarning: boolean;
  nummbers: any = [];
  // calls when we r creating instance of class
  constructor(private router: Router, private pubsubSvc: PubsubService) {
    this.showWarning = false;
    this.userDetails = {
      email: '',
      password: ''
    };
    this.formNumbersArray()
  }

  formNumbersArray() {
    for( let i = 1 ; i < 100; i++) {
      this.nummbers.push(i);
    }
  }

  showNumbersContent(num) {
    if (num % 15 === 0 ) {
      return num + ' it is divisible by 15';
    }
    if (num % 5 === 0 ) {
      return num + ' it is divisible by 5';
    }
    if (num % 3 === 0 ) {
      return num + ' it is divisible by 3';
    }
    return num + ' Normal Number'
  }
  // lifecylce hook
  ngOnInit() {
  }

  checkUser() {
    const allUsers: any = JSON.parse(localStorage.getItem('userDetails'));
    if (allUsers) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < allUsers.length; i++) {
        if (this.userDetails.email === allUsers[i].email && this.userDetails.password === allUsers[i].password) {
          this.router.navigate(['/home']);
          localStorage.setItem('token', 'loggedIn');
          this.pubsubSvc.pubLoginStatus('loggedIn');
          return;
        }
      }
    }
    this.userDetails = {
      email: '',
      password: ''
    };
    this.showWarning = true;
  }
}
