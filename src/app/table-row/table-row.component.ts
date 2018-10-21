import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  user = [];

  @Input() formRows: any[];

  constructor(private _subscription: DataService) { }
  

  ngOnInit() {    
    this._subscription.useritem.subscribe(user => this.user = user);
    console.log('FormRows', this.user);
  }

  removeItem(i) {
    this.formRows.splice(i, 1);    
    this._subscription.setList(this.user); //updated behaviorsubject using next 
    console.log('Removed Rows', this.user);  
  }

}
