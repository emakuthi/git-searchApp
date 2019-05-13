import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextstyle]'
})
export class TextstyleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor = 'blue';
  }

}
