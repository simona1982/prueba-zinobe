import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista.component';
import { UsuarioNavbarComponent } from './components/usuario/usuario-navbar.component';
import { MontoBaseComponent } from './components/monto-base/monto-base.component';
import { UsuariosCreditosComponent } from './components/usuario/usuarios-creditos.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { SolicitudRechazadaComponent } from './components/solicitud/solicitud-rechazada.component';
import { SolicitudAprobadasComponent } from './components/solicitud/solicitud-aprobadas.component';
import { MontoSolicitadoComponent } from './components/monto-solicitado/monto-solicitado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AspiranteComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioListaComponent,
    UsuarioNavbarComponent,
    MontoBaseComponent,
    UsuariosCreditosComponent,
    SolicitudComponent,
    SolicitudRechazadaComponent,
    SolicitudAprobadasComponent,
    MontoSolicitadoComponent,
  ],
  imports: [BrowserModule, APP_ROUTING, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
