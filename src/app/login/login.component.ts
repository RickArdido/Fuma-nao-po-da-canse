import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



newUser : User = new User();

  constructor() { }

  loginUser() {
      console.log(this.newUser.email);
      console.log(this.newUser.password);
  }

  ngOnInit() {
  }


}
