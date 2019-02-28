import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  users: any[any];

  constructor(private data: DataService) {
  }

  ngOnInit() {
  }

  getData() {
    this.data.getUsers()
      .subscribe(content => this.users = content);
  }
}
