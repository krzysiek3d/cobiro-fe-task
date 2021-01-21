import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[cardAvatar]'
})
export class CardAvatarDirective {
  constructor(
    private readonly _renderer: Renderer2,
    private readonly _el: ElementRef
  ) {
    this._renderer.setStyle(
      this._el.nativeElement,
      'width',
      'calc(100% + 32px)'
    );
    this._renderer.setStyle(this._el.nativeElement, 'margin', '0 -16px');
  }
}
