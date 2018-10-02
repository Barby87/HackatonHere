import { Component } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-provides',
  templateUrl: './user-provides.component.html',
  styleUrls: ['./user-provides.component.css']
})
export class UserProvidesComponent {

  userForm: FormGroup = this.formBuilder.group({
    name: '',
    lastName: '',
    country: ''
  });

  constructor(private database: DatabaseService, private formBuilder: FormBuilder) {
  }

  addUser() {
    let time = new Date().toLocaleString()
    const newUser = {
      name: this.userForm.value.name,
      lastName: this.userForm.value.lastName,
      country: this.userForm.value.country,
      time
    };
    this.database.addData('users', newUser);
    console.log(newUser);
  }

}
