import {
  Directive,
  Renderer2,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Directive({
  selector: '[callTo]'
})
export class CallToDirective implements AfterContentInit {
  constructor(
    private readonly _renderer: Renderer2,
    private readonly _el: ElementRef
  ) {}

  ngAfterContentInit(): void {
    const el = this._el.nativeElement;
    const parent = el.parentNode;

    const number = el.innerText;
    const link = this._renderer.createElement('a');
    this._renderer.setAttribute(link, 'href', `tel:+${number}`);

    this._renderer.appendChild(link, el);

    this._renderer.appendChild(parent, link);
  }
}
