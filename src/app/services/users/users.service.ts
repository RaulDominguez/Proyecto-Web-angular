import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {

  user: any;
  logedin: boolean;

  userChanges = new EventEmitter<any>();

  constructor() { }

  login(user, password){
    var log = {user:username, password:password};

    return this.http.post('/api/login', log);
    /*this.user = user;
    this.logedin = true;
    this.userChanges.emit();*/
  }

  logout(){
    this.user = {};
    this.logedin = false;
    this.userChanges.emit();
  }

  isLogedin<booelean>(){
    return this.logedin;
  }

}
