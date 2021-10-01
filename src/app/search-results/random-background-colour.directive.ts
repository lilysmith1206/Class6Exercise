import { Directive, ElementRef, HostListener, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColour]'
})
export class RandomBackgroundColourDirective implements OnInit {

  @HostListener('mouseenter') onMouseEnter() {
    this.setColours();
  }

  @HostListener('click') onMouseClick() {
    this.renderer.removeChild(this.elRef.nativeElement.parentNode, this.elRef.nativeElement);
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.setColours();
  }

  setColours() {
    const c = this.randomHexColour();
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', `#${c.r}${c.g}${c.b}`);
    let rgbVals: number[] = this.elRef.nativeElement.style.backgroundColor.match(/\d+/g);

    this.renderer.setStyle(this.elRef.nativeElement, 'color',
                           rgbVals.reduce((prev, curr) => prev + Number(curr), 0) / 3 < 156 ? 'white' : 'black');
  }
  randomHexColour() {
    const randomHex = () => Math.floor(Math.random()*256).toString(16);
    const [r, g, b] = [randomHex(), randomHex(), randomHex()];
    return {r: r, g: g, b: b};
  }
}
