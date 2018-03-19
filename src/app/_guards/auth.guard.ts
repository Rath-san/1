import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';
import { UserService } from '../_services/user.service';

@Injectable()
export class OnyLoggedInUsersGuard implements CanActivate {

  constructor(
    private _uS: UserService,
    private _router: Router
  ) {}

  // canActivate() {
  //   console.log('OnyLoggedInUsersGuard');
  //   if (this._uS.isLoggedIn) {
  //     return true;
  //   } else {
  //     this._router.navigate(['/login']);
  //   }
  //   return false;

  // }

  canActivate() {
    if (localStorage.getItem('todoMachine.user')) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    this._router.navigate(['/login']);
    return false;
  }
}
