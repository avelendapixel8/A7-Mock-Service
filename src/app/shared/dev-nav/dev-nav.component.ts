import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'dev-nav',
  templateUrl: './dev-nav.component.html',
  styleUrls: ['./dev-nav.component.scss'],
  host: {'class' : 'dev-nav'},
  encapsulation: ViewEncapsulation.None
})
export class DevNavComponent implements OnInit {
  @Input() title : string;
  constructor() { }

  ngOnInit() {
  }

}
