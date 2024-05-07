import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translate/', '.json');
}

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
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang('es'); // Change 'en' to the language code you want as the default.
    this.translate.use('es'); // Optionally set the active language to 'en' here as well.
  }
 }
