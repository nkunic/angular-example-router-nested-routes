import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
  birthday: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[];

  ngOnInit() {
    this.users = [
      {
        id: 1,
        name: 'Mike Nichols',
        email: 'mike.nichols@example.com',
        birthday: '12/4/1952',
      },
      {
        id: 2,
        name: 'Clara Oliver',
        email: 'clara.oliver@example.com',
        birthday: '4/3/1983',
      },
      {
        id: 3,
        name: 'Arron Little',
        email: 'arron.little@example.com',
        birthday: '5/6/1980',
      },
    ];
  }
}
