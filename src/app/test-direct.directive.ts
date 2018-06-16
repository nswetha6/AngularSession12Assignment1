import { Directive,ElementRef,Renderer,HostListener,Input,Output,
  EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTestDirect]'
})
export class TestDirectDirective {
      @Input()
      color:string;
  
      @Output()
      change1:EventEmitter<string>= new EventEmitter();
    // constructor(private el: ElementRef, private renderer: Renderer) { 
    //   renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');

      constructor(private el: ElementRef,
        private renderer: Renderer) { 
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
           }

           @HostListener('mouseover') 
           onHover() {
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.color);
              this.change1.emit("changed value");
             }
           @HostListener('mouseout') onMouseOut() {
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'red');
            this.change1.emit("changed value on mouse out");
             }

}
