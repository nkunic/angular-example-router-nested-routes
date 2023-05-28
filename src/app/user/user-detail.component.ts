import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: '<p>User Detail: ID {{ id }}</p>'
})
export class UserDetailComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
    // this.id = +this.route.snapshot.paramMap.get('id'); // not working!
  }

}