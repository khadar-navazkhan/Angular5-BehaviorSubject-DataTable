import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Output() formSubmit:EventEmitter<any> = new EventEmitter;
  outputString = 'My Test output';


  constructor() { }

  ngOnInit() {
  }

  sendData(){
    this.formSubmit.emit(this.outputString);
  }

}
