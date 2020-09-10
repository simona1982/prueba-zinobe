import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';
import { JsonServerService } from 'src/app/services/json-server.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: [],
})
export class UsuarioNuevoComponent implements OnInit {
  usuario: UsuarioModel;
  monto: number;
  errorMonto: boolean;

  constructor(private jsonserver: JsonServerService) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    // Datos de prueba
    this.usuario.nombre = '';
    this.usuario.correo = '';
    this.usuario.cedula = '';
  }

  onSubmit(form: NgForm) {
    console.log(`hola submit`);
    console.log(form);
    if (form.invalid) {
      return;
    }

    if (this.monto >= 10000 && this.monto <= 100000) {
      this.usuario.valor = this.monto;

      console.log(this.usuario);

      this.jsonserver.solicitudCredito(this.usuario).subscribe((resp) => {
        console.log(resp);
      });
    } else {
      this.errorMonto = true;
    }
  }

  escuchaMonto(valor: number) {
    this.monto = valor;
  }
}
