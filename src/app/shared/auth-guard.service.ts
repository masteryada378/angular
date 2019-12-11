import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from './login.service';
import { take, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public login: LoginService, public router: Router) {}

  public canActivate() {
    // const active = !!this.login.getCurrentUser();
    // console.log(this.login.getCurrentUser());
    // if (!active) {
    //   this.router.navigate(['login']);
    // }
    // return active;
    if (this.login.authenticated) { return true; }
    return   this.login.getAuth().pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log("access denied")
          this.router.navigate(['/login']);
          return false;
        }
    })
    );

  }
}
