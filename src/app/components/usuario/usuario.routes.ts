import { Routes } from '@angular/router';

//hijas de usuarios
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioListaComponent } from './usuario-lista.component';
import { UsuariosCreditosComponent } from './usuarios-creditos.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'lista', component: UsuarioListaComponent },
  { path: 'detalle', component: UsuarioNuevoComponent },
  { path: 'creditos', component: UsuariosCreditosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
];
