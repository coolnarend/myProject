import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  users: any[any];
  user = {
    name: '',
    username: '',
    email: ''
  };

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers()
      .subscribe(content => this.users = content);
  }

  onSubmit() {
    this.data.addUser(this.user).subscribe(user=> {
      this.users.unshift(user);
    });
  }

}
