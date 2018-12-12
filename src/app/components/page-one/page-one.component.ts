import { PhotoService, PeopleService } from './../../service/json-data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageOneComponent implements OnInit {
  public peopleItems = [];
  
  photos$;
  
  constructor(
    private _photoService : PhotoService,
    private _peopleService : PeopleService,
  ) { }
  
  fetchPeople(){
    this._peopleService.fetchPeople()
      .subscribe(
        data => this.peopleItems = data
      );
  }
  
  fetchPhotos() {
    this.photos$ = this._photoService.fetchPhotos();
  }
  
  ngOnInit() {
    this.fetchPhotos();
    this.fetchPeople();
    console.log()
  
  }

}

