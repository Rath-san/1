import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Routes, Router, RouterModule, CanActivate, CanActivateChild } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnyLoggedInUsersGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: ListComponent, data: { state: 'todos' }, canActivate: [OnyLoggedInUsersGuard] },
  { path: 'login', component: LoginComponent, data: { state: 'login' } },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
