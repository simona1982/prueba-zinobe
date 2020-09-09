import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: [],
})
export class UsuarioNuevoComponent implements OnInit {
  usuario: UsuarioModel;

  constructor() {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    // Datos de prueba
    this.usuario.nombre = 'andres velasquez';
    this.usuario.correo = 'monkey.velasquez.1982@gmail.com';
    this.usuario.cedula = '14590849';
  }

  onSubmit(form: NgForm) {
    console.log(`hola submit`);
  }
}
