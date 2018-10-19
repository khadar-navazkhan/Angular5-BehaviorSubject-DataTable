import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { TableService } from './table.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgForComponent } from './ngfor/ngfor.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from './datatable/datatable.component';
import { FormsubmitComponent } from './formsubmit/formsubmit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgForComponent,
    TableComponent,
    TableRowComponent,
    DatatableComponent,
    FormsubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    NgxDatatableModule
  ],
  providers: [DataService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
