import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// import { map } from 'rxjs/operators';
// import 'rxjs/Rx';

// import { map } from 'rxjs/operators';


// import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private myUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get(this.myUrl);
  }

  addUser(user) {
    return this.http.post(this.myUrl, user);
  }

  deleteUsers(id) {
    console.log(this.myUrl + '/' + id);
    return this.http.delete(this.myUrl + '/' + id);
  }
}
