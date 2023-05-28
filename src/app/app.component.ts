import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/user"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active">User</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}