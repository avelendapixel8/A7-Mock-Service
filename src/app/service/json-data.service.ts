import { Response, Http } from '@angular/http';
import { Result, People, PeopleRootObject } from './../models/people.model';
import { HttpClient, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable()
export class PeopleService {
  constructor(
    private http: HttpClient,
    private _http: Http,
    ) {}

  public server: string = 'http://localhost:3000/';
  public apiUrl: string = 'people';
  private serverWithApiUrl : string = this.server + this.apiUrl;

  //Models

  peopleName : string
  
  fetchPeople(): Observable<PeopleRootObject[]> {
    return this.http.get<PeopleRootObject[]>(this.serverWithApiUrl)
  }
}

@Injectable()
export class PhotoService {
  constructor(private http: HttpClient) { }
  
  fetchPhotos(): Observable<object> {
    let photoApiUrl: string = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get(photoApiUrl);
  }

}
