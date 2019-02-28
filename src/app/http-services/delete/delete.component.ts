import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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

  onDeleteClick(id: any) {
    if (confirm('Are you sure?')) {
      this.data.deleteUsers(id)
      .subscribe(res => {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id === id) {
            this.users.splice(i, 1);
          }
        }
      });
    } else {
      return true;
    }

  }

}
