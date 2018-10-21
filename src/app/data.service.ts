import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()

export class DataService {
  
  

  private data = this.httpClient.get('').
subscribe(
	(data:any[]) => {
		console.log(data);
	}
)

  /* array defined with default values and set as observable to be used in other components */
  private useritems = new BehaviorSubject<any>([
    {
      id: 1,
      name: 'Test 1',
      username: 'User 1',
      email: 'user1@user1.com',
      age: 33
    },
    {
      id: 2,
      name: 'Test 2',
      username: 'User 2',
      email: 'user2@user2.com',
      age: 34
    }
  ]);
  useritem = this.useritems.asObservable();

  constructor(private httpClient: HttpClient) { }

  setList(newList) {
    this.useritems.next(newList);
  }

}