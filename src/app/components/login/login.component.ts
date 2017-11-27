import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users/users.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  user: any;
  password: any;
  isLogedin: boolean;

  constructor(
    private userService: UserService,
    private router: Router) {
    }

  ngOnInit() {
    this.isLogedin = this.userService.isLogedin();
  }

  onLogin(){
    if(this.user){
      this.userService.login(this.user);
      this.isLogedin = this.userService.isLogedin();
      this.router.navigateByUrl("/home");
    }
  }

}
