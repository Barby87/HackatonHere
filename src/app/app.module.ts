import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OptionsServiceComponent} from './components/options-service/options-service.component';
import { HomeComponent } from './components/home/home.component';

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
    OptionsServiceComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
