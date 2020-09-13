import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NavbarComponent,
    NgclassComponent,
    ProductentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
