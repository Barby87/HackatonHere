import { Component} from '@angular/core';
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

  constructor(private database: DatabaseService, private formBuilder: FormBuilder, private afAuth: AuthService) {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      service:'',
      tariff: ''
      });
  }


addProperties() {
    let time = new Date().toLocaleString()
    const newUserProvides = {
      service: this.userForm.value.service,
      tariff: this.userForm.value.tariff,
      time
    };
    //this.database.addData('usersWhoProvides ', newUserProvides);
    //console.log(newUserProvides);
  }

  addUser(user) {
    this.database.addData(this.afAuth.user.uid, { // addData(mi firebase-Key, objeto miperfil)
     /*  name: user.displayName,
      email: user.email,
      uid: user.key, */
      service: this.userForm.value.service,
      tariff: this.userForm.value.tariff
    });
  }

}

