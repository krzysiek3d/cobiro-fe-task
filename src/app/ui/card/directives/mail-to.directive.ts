import {
  Directive,
  Renderer2,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Directive({
  selector: '[mailTo]'
})
export class MailToDirective implements AfterContentInit {
  constructor(
    private readonly _renderer: Renderer2,
    private readonly _el: ElementRef
  ) {}

  ngAfterContentInit(): void {
    const el = this._el.nativeElement;
    const parent = el.parentNode;

    const mailAdress = el.innerText;
    const link = this._renderer.createElement('a');
    this._renderer.setAttribute(link, 'href', `mailto:${mailAdress}`);

    this._renderer.appendChild(link, el);

    this._renderer.appendChild(parent, link);
  }
}
