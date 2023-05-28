import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id: number;
  name: string;
  email: string;
  birthday: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id'); // not working!
    this.route.paramMap.subscribe((params) => (this.id = +params.get('id')));
  }
}
