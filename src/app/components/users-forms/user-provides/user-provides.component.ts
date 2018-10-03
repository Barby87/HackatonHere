import { Component } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-user-provides',
  templateUrl: './user-provides.component.html',
  styleUrls: ['./user-provides.component.css']
})
export class UserProvidesComponent {

  userForm: FormGroup;
  nameUser: string;
  emailUser: string;

  constructor(private database: DatabaseService, private formBuilder: FormBuilder, private afAuth: AuthService) {
    this.createUserForm();

    this.afAuth.getAuth().subscribe(auth => {
      this.nameUser = auth.displayName;
      this.emailUser = auth.email;
    }
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      service: '',
      tariff: ''
    });
  }


  addProperties() {
    const newUserProvides = {
      service: this.userForm.value.service,
      tariff: this.userForm.value.tariff,
    };
  }

  addUser() {
    this.database.addData(this.afAuth.user.uid, { // addData(mi firebase-Key, objeto miperfil)
      name: this.nameUser,
      email: this.emailUser,
      service: this.userForm.value.service,
      tariff: this.userForm.value.tariff
    });
  }

}

