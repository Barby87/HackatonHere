
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app-routing.module';

//Firebase
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';

//Nuestros componentes
import { FlashMessagesModule } from 'angular2-flash-messages';
import { UserRequestComponent } from './components/users-forms/user-request/user-request.component';
import { UserProvidesComponent } from './components/users-forms/user-provides/user-provides.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginPageComponent,
    UserRequestComponent,
    UserProvidesComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    FormsModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(routes),

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
