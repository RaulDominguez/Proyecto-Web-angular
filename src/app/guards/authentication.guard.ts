import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/users/users.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userService.isLogedin()) {
       return true;
     } else {
       this.router.navigateByUrl('/login');
       return false;
     }
  }
}
