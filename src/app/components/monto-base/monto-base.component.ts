import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-monto-base',
  templateUrl: './monto-base.component.html',
  styleUrls: ['./monto-base.component.css'],
})
export class MontoBaseComponent implements OnInit {
  capital: number;

  constructor() {
    console.log(environment.capital);
  }

  ngOnInit(): void {
    this.capital = environment.capital;
  }
}
