import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent, UserDetailsComponent, UsersComponent} from './components';
import {UserService} from "./services";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],

})
export class UserModule {
}
