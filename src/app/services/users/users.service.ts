import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {

  user: any;
  logedin: boolean;

  userChanges = new EventEmitter<any>();

  constructor() { }

  login(user){
    this.user = user;
    this.logedin = true;
    this.userChanges.emit();
  }

  logout(){
    this.user = {};
    this.logedin = false;
    this.userChanges.emit();
  }

  isLogedin<boolean>(){ //Se cambio por booelan
    return this.logedin;
  }

}
