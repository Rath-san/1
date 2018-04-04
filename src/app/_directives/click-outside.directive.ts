import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @HostListener('document:click', ['$event'])
  onClickOutside(e) {
    const contains = this._elRef.nativeElement.contains(e.target)
    if (contains) {
      console.log('contains');
    }
  }
  constructor(
    private _elRef: ElementRef
  ) { }

}
