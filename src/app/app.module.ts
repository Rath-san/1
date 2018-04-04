import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MainService } from './_services/main.service';
import { UserService } from './_services/user.service';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './list/form/form.component';
import { TodoItemComponent } from './list/todo-item/todo-item.component';
import { LoginComponent } from './login/login.component';


import { OnyLoggedInUsersGuard } from './_guards/auth.guard';
import { RoutingModule } from './app.routing';
import { AuthenticationService } from './_services/authentication.service';
import { SearchService } from './_services/search.service';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideDirective } from './_directives/click-outside.directive';
// import { PaginationComponent } from './list/pagination/pagination.component';
// import { PaginationService } from './list/pagination/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    TodoItemComponent,
    LoginComponent,
    HeaderComponent,
    ClickOutsideDirective
    // PaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [

    MainService,
    UserService,
    SearchService,
    // PaginationService,
    OnyLoggedInUsersGuard,


    AuthenticationService,
    // providers used to create fake backend
    // fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
