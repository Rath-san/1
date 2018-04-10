import { Component, transition, ViewChild } from '@angular/core';
import { routerAnimation } from './_animations/animations';
import { trigger, useAnimation, state, query, style, group, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('outletAnim', [routerAnimation])
  ]
})
export class AppComponent {
  title = 'app';

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

}
