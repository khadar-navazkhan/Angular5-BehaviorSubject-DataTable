import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { NgForComponent } from './ngfor/ngfor.component';  // Add this
import { TableComponent } from './table/table.component';  // Add this

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ngfor/:id/:value',
    component: NgForComponent
  },
  {
    path: 'table',
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
