import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //variables
  user:User;
  //user:Object;

  constructor() { 
    //initializing variables
    this.user = { 
      firstName:'John',
      lastName:'Doe',
      age:30,
      address : { 
        street1: '12 Castlewood',
        street2: 'Bridge Street',
        town: 'Mallow',
        county: 'Cork',
        country: 'Ireland',
        postcode: 'P51AW73',
      }
    }
    
  }
  ngOnInit() {

  }
}
