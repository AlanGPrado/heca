import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ClarificacionYFiltracionComponent } from './pages/productos/clarificacion-y-filtracion/clarificacion-y-filtracion.component';
import { SistemasVaporYCondensadosComponent } from './pages/productos/sistemas-vapor-y-condensados/sistemas-vapor-y-condensados.component';
import { SistemasEnfriamentoComponent } from './pages/productos/sistemas-enfriamento/sistemas-enfriamento.component';
import { DisenoPlantasTratamientoAguasComponent } from './pages/productos/diseno-plantas-tratamiento-aguas/diseno-plantas-tratamiento-aguas.component';
import { IndustriaPapeleraComponent } from './pages/productos/industria-papelera/industria-papelera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    ClarificacionYFiltracionComponent,
    SistemasVaporYCondensadosComponent,
    SistemasEnfriamentoComponent,
    DisenoPlantasTratamientoAguasComponent,
    IndustriaPapeleraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
