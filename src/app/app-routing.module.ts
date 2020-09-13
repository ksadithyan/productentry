import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { ProductentryComponent } from './productentry/productentry.component';

const routes: Routes = [
  {
    path:"home",
    component:NgclassComponent
  },
  {
    path:"test",
    component:NgstyleComponent
  },
  {
    path:"productentry",
    component:ProductentryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
