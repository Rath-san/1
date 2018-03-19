import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';
import { User } from '../_models/user';

@Injectable()
export class UserService {
  constructor(
    private _http: Http,
    private _authService: AuthenticationService
  ) { }

  getUsers(): Observable<User[]> {
    const headers = new Headers({'Authorization': 'Bearer' + this._authService.token});
    const options = new RequestOptions({headers: headers});

    return this._http.get('/api/users', options)
      .map((r: Response) => r.json());
  }
}
