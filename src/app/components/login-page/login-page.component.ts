import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';



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
    public router:Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.singIn(this.email, this.password)
    .then ((res) => {

      this.router.navigate(['home']);
      console.log("Login con exito!");
      console.log(res);
    }).catch((err) => {

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
