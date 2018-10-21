import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

export class User {
  id: number; 
  name: string;
  username: string;
  email: string;
  age: number;

  constructor(values: Object = {}) {
      /*Constructor initialization*/
      Object.assign(this, values);
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],  
  encapsulation: ViewEncapsulation.None,
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})

      ])
    ])

  ]
})


export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an Item';  
  useritems = [];
  user: User;
  dataTableHeading = 'Ngx-DataTable version';
  rows = [];

  columns = [
    { prop: 'id' },
    { prop: 'name' },
    { prop: 'username' },
    { prop: 'email' },
    { prop: 'age' }
  ];

  constructor(private _data: DataService) {
    this.user = new User;
    
  }

  ngOnInit() {    
    this._data.useritem.subscribe(res => {
      this.useritems = res;    
      this.rows = [...res];  //push results subscribed into rows array
    });
   
    this.itemCount = this.useritems.length;
  }

  getRows(rowDetail){
    console.log('Selected Event Details via @Output', rowDetail[0].id); //selected child component row details
  }

  onFormSubmit({ value }: { value: User }) {
    this.user = value;
    this.useritems.push(this.user); //update useritems array    
    this.itemCount = this.useritems.length; //update items array count   
    this.rows = [...this.useritems]; //update rows array to update child component
    console.log('Updated rows', this.useritems);
  }

}