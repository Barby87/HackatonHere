import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router:Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.singIn(this.email, this.password)
    .then ((res) => {
      this.flashMessage.show('Usuario logueado correctamente.', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['home']);
      console.log("Login con exito!");
      console.log(res);
    }).catch((err) => {
      this.flashMessage.show('Usuario y/o contraseña incorrecta.', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['login']);
      console.log(err);
    })
  }

  loginGoogle(){
    this.authService.googleLogin()
    .then((res) => {
      this.router.navigate(['home']);
    }).catch(err => console.log(err.message));
  }

  loginFacebook(){
    this.authService.facebookLogin()
    .then((res) => {
      this.router.navigate(['home']);
    }).catch(err => console.log(err.message));
  }

}
