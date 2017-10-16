import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {

  constructor() { }

  newuser = {
    name: '',
    age: '',
    gender: '',
    lookingFor: '',
    zipcode: '',
    email: '',
    password: '',
    imageUrl: '',
    description: ''
  };

  user = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }

}
