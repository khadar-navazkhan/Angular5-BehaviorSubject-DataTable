import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CHARACTERS } from './mock-data';

@Injectable()

export class TableService {

  constructor() { }

  getCharacters(): Observable<any[]>{
    return of(CHARACTERS);
  }

  getColumns(): string[]{
    return ["name", "age", "species", "occupation"]};
  }