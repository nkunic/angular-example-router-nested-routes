import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/user"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active">User</a>
      <a routerLink="/customer"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active">Customer</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    a:hover, a.active { color: red; }
  `]
})
export class AppComponent {}