import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() btnType;
  @Input() disabled = false;

  // @Input('disabled')
  // set disabled(d: boolean) {
  //   this._disabled = d;
  // }

  // private disabled;

  constructor() { }

  ngOnInit() {
  }

  // get disabled() {
  //   return this._disabled;
  // }

  // set disabled(d: boolean) {
  //   this._disabled = d;
  // }

}
