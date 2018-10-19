import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';  
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})

export class NgForComponent implements OnInit {

  useritems: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(params => console.log(params.id, params.value));
  }

  ngOnInit() {
    this._data.useritem.subscribe(res => this.useritems = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
