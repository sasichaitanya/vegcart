import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userDetails: any;
  constructor(private router: Router) {
    this.userDetails = {
      name: '',
      age: '',
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  userRegistration() {
    let allUsers: any = [];
    if (JSON.parse(localStorage.getItem('userDetails')) && JSON.parse(localStorage.getItem('userDetails')).length > 0) {
      allUsers = JSON.parse(localStorage.getItem('userDetails'));
    }
    allUsers.push(this.userDetails);
    localStorage.setItem('userDetails', JSON.stringify(allUsers));
    this.router.navigate(['/login']);
  }
}
