import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [BrowserModule, RouterModule.forChild(customerRoutes)],
  exports: [],
  providers: [],
})
export class CustomerModule {}
