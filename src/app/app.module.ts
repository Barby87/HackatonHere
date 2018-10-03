import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// rutas
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './services/auth.service';
import { environment} from '../environments/environment.prod';
import { AuthGuard } from './guards/auth.guard';
import { UserRequestComponent } from './components/users-forms/user-request/user-request.component';
import { UserProvidesComponent } from './components/users-forms/user-provides/user-provides.component';

//nuestros componentes
import { HereMapComponent } from './components/here-map/here-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginPageComponent,
    UserRequestComponent,
    UserProvidesComponent,
    HereMapComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,

  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
