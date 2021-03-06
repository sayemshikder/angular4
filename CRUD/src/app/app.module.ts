import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import { app_routing } from './app.routes';

//services

import { UsuarioService } from './services/usuario.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/index/usuario.component';
import { DetalleComponent } from './components/usuario/detalle/detalle.component';
import { CreateComponent } from './components/usuario/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    UsuarioComponent,
    DetalleComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
