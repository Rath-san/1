import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  constructor(
    private _router: Router,
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    // this._authService.logout();
  }

  login() {
    this.loading = true;
    this._authService.login(this.model.username, this.model.password)
      .subscribe(
        r => {
          if (r === true) {
            this._router.navigate(['/']);
          }
        },
        err => {
          console.log(err);
          this.error = 'UserName or password is incorrect';
          this.loading = false;
        });
  }

}
