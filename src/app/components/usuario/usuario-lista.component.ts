import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonServerService } from './../../services/json-server.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styles: [
    `
      thead {
        background-color: #007bff;
        color: white;
      }
    `,
  ],
})
export class UsuarioListaComponent implements OnInit {
  usuariosRegistrados: any[] = [];

  constructor(private jsonserver: JsonServerService, private router: Router) {
    jsonserver.listarUsuarios().subscribe((data: any) => {
      console.log(data);
      this.usuariosRegistrados = data;
    });
  }

  ngOnInit(): void {}

  verHistorialCreditos(cedula: string) {
    console.log(cedula);

    this.router.navigate(['usuario/creditos'], {
      queryParams: { cedula },
    });
  }
}
