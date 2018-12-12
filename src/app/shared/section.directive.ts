import { Directive, Input, ElementRef, Renderer2, HostListener, Inject, ViewChild } from '@angular/core';
import { DOCUMENT, } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Directive(
  {
    selector: 'section'
  }
)
export class Section {
  @Input() id !: string;
  constructor (
    @Inject(DOCUMENT)
    private document : Document,
    private sectionEl : ElementRef,
    private renderer : Renderer2
  ){
    console.log(this.sectionEl)
  }
  @HostListener ('window:scroll', ['$event'])
  // public windowTop: number;

  // onWindowScroll($event){
  //   let _sectionEl = this.document.getElementById(this.id) as HTMLElement;
  //   let offset = this.document.getElementById(this.id).offsetTop;
  //   // let scrollY = window.scrollY|| this.element.nativeElement || document.documentElement.scrollTop;
  //   // console.log(event.currentTarget);
  //   // console.log(this.element);
  //   if ( scrollY > offset){
  //     console.log(offset)
  //     // this.renderer.addClass(_sectionEl, "active");
  //     // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');
  //     if(scrollY < offset){
  //       this.renderer.removeClass(_sectionEl, "active");
  //       this.renderer.removeStyle(this.element.nativeElement, 'backgroundColor');
  //     }

  //   } else {
  //     this.renderer.removeClass(_sectionEl, "active");
  //     this.renderer.removeStyle (this.element.nativeElement, 'backgroundColor', );

  //   }

  //   console.log(this.id);
    
  //   // this.setSectionActive();
  // }
  public setSectionActive():void{
    // let scrollYPosition = this.element.nativeElement.offsetTop;



    console.log()
  }
  ngAfterViewInit(): void {
    console.log(this.id))
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');
    
  }
}
