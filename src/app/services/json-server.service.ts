import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from './../models/usuario.model';
import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonServerService {
  private url = `http://localhost:4200/api/`;

  constructor(private http: HttpClient) {
    console.log(`Spotify service listo.`);
  }

  listarUsuarios() {
    return this.http.get(`${this.url}users`).pipe(
      map((resp) => {
        //console.log('entro en el map');
        return resp;
      })
    );
  }

  verCreditos(cedula: string) {
    console.log(cedula);
    return this.http.get(`${this.url}users/${cedula}`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  solicitudesRechazadas() {
    return this.http.get(`${this.url}users`).pipe(
      map((resp) => {
        //console.log(resp);

        return resp;
      })
    );
  }

  solicitudesAprobadas() {
    return this.http.get(`${this.url}users`).pipe(
      map((resp) => {
        return resp;
      })
    );
  }

  solicitudCredito(usuario: UsuarioModel) {
    //const estado = Math.random() === 1 ? 'aprobado' : 'rechazado';
    const estado = 'aprobado';

    const authData = {
      id: usuario.cedula,
      nombre: usuario.nombre,
      correo: usuario.correo,
      creditos: [
        {
          id: null,
          valor: usuario.valor,
          fechaPagar: usuario.fechaPagar
            ? usuario.fechaPagar
            : new Date(usuario.fechaPagar),
          estado: estado,
          pago: false,
        },
      ],
    };

    if (estado === 'aprobado') {
      console.log('aqui');
      //environment.capital = environment.capital - usuario.valor;
    }

    console.log(authData);

    // Guardo solicitud
    return this.http.post(`${this.url}users`, authData).pipe(
      map((resp) => {
        console.log('entro en el map');

        return resp;
      })
    );
  }
}
