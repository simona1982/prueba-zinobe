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

  obtenerUsuarios() {
    return this.listarUsuarios();
  }

  solicitudCredito(usuario: object) {
    return this.http.post(`${this.url}users`, usuario).pipe(
      map((resp) => {
        console.log('entro en el map');
        return resp;
      })
    );
  }
}
