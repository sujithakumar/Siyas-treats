import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './create.profile/create.profile.component';
import { LoginComponent } from './login/login.component';
import { ViewProfileComponent } from './view.profile/view.profile.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    CreateProfileComponent,
    LoginComponent,
    ViewProfileComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CreateProfileComponent,
    LoginComponent,
    ViewProfileComponent
  ]
})
export class ProfileModule { }
