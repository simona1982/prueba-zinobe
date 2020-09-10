import { Routes } from '@angular/router';

//hijas de usuarios
import { SolicitudRechazadaComponent } from './solicitud-rechazada.component';
import { SolicitudAprobadasComponent } from './solicitud-aprobadas.component';

export const SOLICITUD_ROUTES: Routes = [
  { path: 'rechazadas', component: SolicitudRechazadaComponent },
  { path: 'aprobadas', component: SolicitudAprobadasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'rechazadas' },
];
