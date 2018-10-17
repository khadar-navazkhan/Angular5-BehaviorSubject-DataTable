import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: TableService) { }

  ngOnInit() {
    
    this.columns = this.atService.getColumns(); 
    //["name", "age", "species", "occupation"]

    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts

  }

}
