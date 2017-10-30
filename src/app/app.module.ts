import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent }   from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { SignupComponent } from './signup/signup.component' ;



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    FormComponent,
    SignupComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
