import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from './../../models/usuario.model';
import { JsonServerService } from 'src/app/services/json-server.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: [],
})
export class UsuarioNuevoComponent implements OnInit {
  usuario: UsuarioModel;
  monto: number;
  errorMonto: boolean;
  alertUsuarioNuevo: boolean = false;
  alertaCreditosRechazados: boolean = false;
  res = [];
  rechazados = [];

  constructor(private jsonserver: JsonServerService) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();

    // Datos de prueba
    this.usuario.nombre = '';
    this.usuario.correo = '';
    this.usuario.cedula = '';
    this.usuario.fechaPagar = null;
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

      this.jsonserver.obtenerUsuarios().subscribe((resp) => {
        let usuarioNuevo = true;
        let creditosUsuario = [];

        //verifica si existe el usuario
        for (const property in resp) {
          console.log(`${property}: ${resp[property].id}`);

          if (resp[property].id == this.usuario.cedula) {
            console.log(`usuario existe`);
            usuarioNuevo = false;

            //obtener creditos y revisar si tiene rechazado
            console.log(resp[property].creditos);
            creditosUsuario = resp[property].creditos;
          }
        }

        //usuario nuevo
        if (usuarioNuevo) {
          const authData = {
            id: Number(this.usuario.cedula),
            nombre: this.usuario.nombre,
            correo: this.usuario.correo,
            creditos: [
              {
                id: 1,
                valor: Number(this.usuario.valor),
                fechaPagar: this.usuario.fechaPagar
                  ? this.usuario.fechaPagar
                  : new Date(),
                estado: Math.random() > 0.5 ? 'aprobado' : 'rechazado',
                pago: false,
              },
            ],
          };

          // Guardo solicitud
          this.jsonserver.solicitudCredito(authData).subscribe((res) => {
            console.log(res);
            this.alertUsuarioNuevo = true;
          });
        } else {
          const rechazados = creditosUsuario.filter((credito) => {
            return credito.estado == 'rechazado';
          });

          if (rechazados.length > 0) {
            console.log(rechazados.length);
            this.alertaCreditosRechazados = true;
            this.rechazados = rechazados;
          }
        }

        console.log(`usuario nuevo: ${usuarioNuevo}`);

        //const usuarioBuscar = resp['users'].filter((user) => {});
      });
    } else {
      this.errorMonto = true;
    }
  }

  escuchaMonto(valor: number) {
    this.monto = valor;
  }
}
