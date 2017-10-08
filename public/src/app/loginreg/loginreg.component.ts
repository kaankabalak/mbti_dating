import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {

  constructor() { }

  user = {
    name: '',
    age: '',
    email: '',
    imageUrl: '',
    description: ''
  }

  ngOnInit() {
  }

}
