import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: '/user',  pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
