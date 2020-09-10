import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-monto-solicitado',
  templateUrl: './monto-solicitado.component.html',
  styleUrls: ['./monto-solicitado.component.css'],
})
export class MontoSolicitadoComponent implements OnInit {
  monto: number = 10000;
  @Output() enviarMonto: EventEmitter<number>;

  constructor() {
    this.enviarMonto = new EventEmitter();
  }

  ngOnInit(): void {}

  mandarMonto(monto: number) {
    this.monto = monto;
    console.log(this.monto);
    this.enviarMonto.emit(this.monto);
  }
}
