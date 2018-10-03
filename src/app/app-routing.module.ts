import { Routes } from '@angular/router';

//import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

import { AuthGuard } from './guards/auth.guard';
import { UserProvidesComponent } from './components/users-forms/user-provides/user-provides.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },


];

