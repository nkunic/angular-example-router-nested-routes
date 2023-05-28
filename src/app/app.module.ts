import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ 
    BrowserModule, 
    UserModule,
    AppRoutingModule /* AppRoutingModule */
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
