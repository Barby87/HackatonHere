import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public isLogin: boolean;
  public nameUser : string;
  public emailUser: string;
  public photoUser: string;
  public query: string;
  constructor(public authService: AuthService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogin = true;
        this.nameUser = auth.displayName;
        this.emailUser = auth.email;
        this.photoUser = auth.photoURL;
      }else{
        this.isLogin = false;
      }
    })
  }



}
