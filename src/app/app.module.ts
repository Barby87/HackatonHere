import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserRequestComponent } from './components/users-forms/user-request/user-request.component';
import { UserProvidesComponent } from './components/users-forms/user-provides/user-provides.component';
import { environment } from '../environments/environment';
import { GeolocationComponent } from './components/geolocation/geolocation.component';



@NgModule({
  declarations: [
    AppComponent,
    UserRequestComponent,
    UserProvidesComponent,
    GeolocationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
