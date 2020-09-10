import { Component, OnInit } from '@angular/core';
import { JsonServerService } from 'src/app/services/json-server.service';

@Component({
  selector: 'app-solicitud-rechazada',
  templateUrl: './solicitud-rechazada.component.html',
})
export class SolicitudRechazadaComponent implements OnInit {
  solicitudesRechazadas: any[] = [];

  constructor(private jsonserver: JsonServerService) {
    jsonserver.solicitudesRechazadas().subscribe((data: any) => {
      //console.log(data);

      let rechazados = [];

      //usuario
      data.forEach((usuario) => {
        //console.log(usuario['creditos']);
        if (usuario['creditos'].length > 0) {
          //Creditos
          usuario['creditos'].forEach((credito) => {
            if (credito.estado === 'rechazado') {
              rechazados.push({
                cedula: usuario.id,
                nombre: usuario.nombre,
                estado: credito.estado,
                monto: credito.valor,
              });
            }
          });
        }
      });

      this.solicitudesRechazadas = rechazados;

      console.log(rechazados);
    });
  }

  ngOnInit(): void {}
}
