import { RouterModule, Routes } from '@angular/router';

import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

export const ROUTES: Routes = [
  { path: 'aspirante', component: AspiranteComponent },
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: USUARIO_ROUTES,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'aspirante' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
