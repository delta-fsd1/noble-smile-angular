import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > 100) {
      if (screen.width > 991) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'rgb(255,255,255)');
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.4s linear');
        this.renderer.addClass(this.el.nativeElement, 'fixed-top');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'fixed-top');
        this.renderer.setStyle(this.el.nativeElement, 'position', 'sticky');
        this.renderer.setStyle(this.el.nativeElement, 'top', '0');
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '2');
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'rgb(255,255,255)');
      }
    }
    if (window.scrollY < 100) {
      if (screen.width > 991) {
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'rgba(255,255,255, 0.7)');
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.4s linear');
        this.renderer.addClass(this.el.nativeElement, 'fixed-top');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'fixed-top');
        this.renderer.setStyle(this.el.nativeElement, 'position', 'sticky');
        this.renderer.setStyle(this.el.nativeElement, 'top', '0');
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '2');
        this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'rgb(255,255,255)');
      }
    }
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.onScroll();
  }

}
