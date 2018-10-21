import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ArrayType } from '@angular/compiler';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  
  constructor() { }

  /* Empty array initialised to be used in the datatable property */
  selected = [];

  /* Data Set to this child component from parent component home.component.ts */
  @Input() dataTableHeader: string;
  @Input() rows:any[]; 
  @Input() columns:any[];
  @Output() rowsRecord:EventEmitter<any> = new EventEmitter;

  ngOnInit() {    
  }  

  /* Event Emitted from child component to parent component home.component.ts */
  selectRow({ selected }){
    this.rowsRecord.emit(this.selected);
  }

}
