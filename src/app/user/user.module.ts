import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    /* 라우트 모듈의 등록 */
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserDetailComponent
  ]
})
export class UserModule { }