import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;  // defaultColor:外部内部同名。

  @Input('appHighlight') highlightColor: string;   // appHighlight:外部名。highlightColor内部名。

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}
