import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user',
  template: `
    <p>User List</p>
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="user.id"
        [routerLinkActiveOptions]="{ exact: true }"
        routerLinkActive="active">{{ user.name }}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>    
  `,
  styles: [`
    a:hover, a.active { color: red; }
  `]
})
export class UserComponent implements OnInit {
  users: User[];

  ngOnInit() {
    this.users = [ 
      { id: 1, name: 'User-1' },
      { id: 2, name: 'User-2' },
    ];
  }
}