import { Component, OnInit, ViewEncapsulation, Renderer2, ElementRef, ViewChild, Directive, Input } from '@angular/core';

@Component({
  selector: 'page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageTwoComponent implements OnInit {

  constructor(
    // private element : ElementRef,
    // private renderer : Renderer2,
  ) { }

  ngOnInit() {
  }
  // @ViewChild('section') section: ElementRef;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.element)
    // this.renderer.element.nativeElement.style.backgroundColor = "pink";
    // this.element.nativeElement.style.display = 'block';
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'pink');
    // this.renderer.selectRootElement(this.element)

  }

}
