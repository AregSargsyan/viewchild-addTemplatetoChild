import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom1]'
})
export class Custom1Directive {

  @Input() set value(val){
    let buttonElement = this.renderer.createElement('button');
    const text = this.renderer.createText(val);
    this.renderer.appendChild(buttonElement, text);
    this.renderer.appendChild(this.elementRef.nativeElement, buttonElement);
  }

  constructor( private renderer: Renderer2, private elementRef: ElementRef) { }



}
