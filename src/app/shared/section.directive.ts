import { element } from 'protractor';
import { Directive, Input, ElementRef, Renderer2, HostListener, Inject, ViewChild } from '@angular/core';
import { DOCUMENT, } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Directive({
    selector: '[sectionActive]',
  })
  
  export class Section {
  // @Input() sectionId: string;
  @Input() id !: string;
  constructor (
    @Inject(DOCUMENT)
    private document : Document,
    private sectionEl : ElementRef,
    private renderer : Renderer2
  ){ }
  public sectionInView : Boolean;
  @HostListener ('window:scroll', ['$event'])
  onScrollSectionActive(event){
    const _sectionEl = this.sectionEl.nativeElement;
    const sectionElOffset = _sectionEl.offsetTop;
    const sectionEloffsetHeight = _sectionEl.offsetHeight;
    const sectionElBottom = sectionElOffset + sectionEloffsetHeight;

    if (this.sectionEl){
      if(scrollY >= sectionElOffset){
        this.renderer.setStyle(_sectionEl, 'backgroundColor', 'pink');
        if(scrollY >= sectionElBottom){
          this.renderer.removeStyle(_sectionEl, 'backgroundColor')
        }
      }
      else{
          this.renderer.removeStyle(_sectionEl, 'backgroundColor')
      }
    }
  }

  public setSectionActive():void{

    console.log()
  }
  ngAfterViewInit(): void {
    console.log(scrollY);
    console.log(this.id);
    console.log(this.sectionEl);
    console.log('offsetTop:' + this.sectionEl.nativeElement.offsetTop)
    console.log('offsetHeight:' + this.sectionEl.nativeElement.offsetHeight)
    console.log(this.sectionEl.nativeElement.offsetTop + this.sectionEl.nativeElement.offsetHeight)
    // console.log(this.sectionId)
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');
    
  }
}
