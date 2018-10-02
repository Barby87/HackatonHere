import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// rutas
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserRequestComponent } from './components/users-forms/user-request/user-request.component';
import { UserProvidesComponent } from './components/users-forms/user-provides/user-provides.component';
import { environment } from '../environments/environment';
import { HereMapComponent } from './components/here-map/here-map.component';
import { OptionsServiceComponent } from './components/options-service/options-service.component';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guards/auth.guard';

/*const routes: Routes = [
  { path: 'options', 
    component: OptionsServiceComponent 
  },
  
  { path: 'home',
    component: HomeComponent
  }
];*/

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    UserRequestComponent,
    UserProvidesComponent,
    HereMapComponent,
    OptionsServiceComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService,FlashMessagesService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
