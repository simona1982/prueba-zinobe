import { Component, OnInit } from '@angular/core';
import { JsonServerService } from 'src/app/services/json-server.service';

@Component({
  selector: 'app-solicitud-aprobadas',
  templateUrl: './solicitud-aprobadas.component.html',
})
export class SolicitudAprobadasComponent implements OnInit {
  solicitudesAprobadasPend: any[] = [];

  constructor(private jsonserver: JsonServerService) {
    jsonserver.solicitudesAprobadas().subscribe((data: any) => {
      console.log(data);

      let aprobadas = [];

      //usuario
      data.forEach((usuario) => {
        //console.log(usuario['creditos']);
        if (usuario['creditos'].length > 0) {
          //Creditos
          usuario['creditos'].forEach((credito) => {
            if (credito.estado === 'aprobado' && credito.pago === false) {
              aprobadas.push({
                cedula: usuario.id,
                nombre: usuario.nombre,
                estado: credito.estado,
                pago: credito.pago,
                monto: credito.valor,
              });
            }
          });
        }
      });

      this.solicitudesAprobadasPend = aprobadas;

      console.log(aprobadas);
    });
  }

  ngOnInit(): void {}
}
