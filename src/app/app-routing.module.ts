import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ClarificacionYFiltracionComponent } from './pages/productos/clarificacion-y-filtracion/clarificacion-y-filtracion.component';
import { DisenoPlantasTratamientoAguasComponent } from './pages/productos/diseno-plantas-tratamiento-aguas/diseno-plantas-tratamiento-aguas.component';
import { IndustriaPapeleraComponent } from './pages/productos/industria-papelera/industria-papelera.component';
import { SistemasEnfriamentoComponent } from './pages/productos/sistemas-enfriamento/sistemas-enfriamento.component';
import { SistemasVaporYCondensadosComponent } from './pages/productos/sistemas-vapor-y-condensados/sistemas-vapor-y-condensados.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'productos/clarificacion-y-filtracion', component: ClarificacionYFiltracionComponent},
  { path: 'productos/sistemas-vapor-y-condensados', component: SistemasVaporYCondensadosComponent},
  { path: 'productos/sistemas-enfriamento', component: SistemasEnfriamentoComponent},
  { path: 'productos/diseno-plantas-tratamiento-aguas', component: DisenoPlantasTratamientoAguasComponent},
  { path: 'productos/industria-papelera', component: IndustriaPapeleraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
