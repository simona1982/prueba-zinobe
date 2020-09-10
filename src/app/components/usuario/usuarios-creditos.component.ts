import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JsonServerService } from 'src/app/services/json-server.service';

@Component({
  selector: 'app-usuarios-creditos',
  templateUrl: './usuarios-creditos.component.html',
  styleUrls: ['./usuarios-creditos.component.css'],
})
export class UsuariosCreditosComponent implements OnInit {
  //Propiedades
  private sub: any;
  creditosPorUsuario: any[] = [];
  usuario: string;
  cedula: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private jsonserver: JsonServerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.sub = this.rutaActiva.queryParams.subscribe((params) => {
      this.cedula = params['cedula'];
      console.log(this.cedula);
      this.verCreditosUsuario();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  verCreditosUsuario() {
    this.jsonserver.verCreditos(this.cedula).subscribe((data: any) => {
      console.log(data);
      this.usuario = data.nombre;
      this.creditosPorUsuario = data['creditos'];
    });
  }

  goBack() {
    // window.history.back();
    this.location.back();

    console.log('goBack()...');
  }
}
