import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()

export class DataService {
  
  

  private getData = this.httpClient.get('https://my-json-server.typicode.com/khadar-navazkhan/Angular5-BehaviorSubject-DataTable/profile')
  .subscribe(
    (getData:any[]) => {
      console.log('getData', getData);
    }
  );

  /* array defined with default values and set as observable to be used in other components */
  private useritems = new BehaviorSubject<any>(this.getData);
  useritem = this.useritems.asObservable();

  constructor(private httpClient: HttpClient) { }

  setList(newList) {
    this.useritems.next(newList);
  }

}