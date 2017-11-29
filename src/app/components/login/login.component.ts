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

  onLogin()
  {
    console.log("onlogin", this.user, this.password);
      if (this.user)
      {
        // this.userService.login(this.user, this.password);
        this.userService.login(this.user, this.password).subscribe((res: any) => {
        // verificacion solamente console.log('resultado:', res.body);
        if (res.body) //compara en base de datos PRUEBA
        {
          this.userService.user = res.body[0].email;
          this.userService.logedin = true;
          this.userService.userChanges.emit();
          this.router.navigateByUrl("/home");
        } else
        {
          this.userService.user = '';
          this.userService.logedin = false;
          this.userService.userChanges.emit();
        }
    /*if(this.user){                                    codigo antes de corregir
      this.userService.login(this.user, this.password);
      this.isLogedin = this.userService.isLogedin();
      this.router.navigateByUrl("/home");
    }*/
      }
    }
  }
}
