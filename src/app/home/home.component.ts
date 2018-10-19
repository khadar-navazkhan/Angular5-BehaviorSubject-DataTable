import { Component, OnInit } from '@angular/core';
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
    });

    console.log('Default Observable Values', this.useritems);
    this.rows = [...this.useritems];
    this.itemCount = this.useritems.length;
  }

  getData(test){
    console.log(test);
  }

  getRows(rows){
    console.log(rows);
  }

  onFormSubmit({ value }: { value: User }) {
    this.user = value;
    this.useritems.push(this.user);   
    this.itemCount = this.useritems.length;    
    console.log('Form Group Added', this.useritems);
    this.rows.push(value);
    console.log('this rows', this.rows);
    this.rows = [...this.rows];
  }

  removeItem(i) {
    this.useritems.splice(i, 1);    
    this.itemCount = this.useritems.length;
    console.log('this rows', this.rows);
    this.rows = [...this.useritems];
  }

}