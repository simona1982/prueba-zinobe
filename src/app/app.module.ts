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
  ],
  imports: [BrowserModule, APP_ROUTING, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
