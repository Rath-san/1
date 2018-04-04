import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { MainService } from '../_services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = false;

  constructor(
    private _mainService: MainService,
    private _authService: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  logOut() {
    this._authService.logout();
    this._router.navigateByUrl('/login');
    this.toggleMenu();
  }

  clearCompleted() {
    this._mainService.clearToDos();
    // this.toggleMenu();
  }
}
