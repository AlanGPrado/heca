import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sistemas-vapor-y-condensados',
  templateUrl: './sistemas-vapor-y-condensados.component.html',
  styleUrls: ['./sistemas-vapor-y-condensados.component.scss']
})
export class SistemasVaporYCondensadosComponent {

  constructor(private el: ElementRef, private translate: TranslateService) {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLElement).getAttribute('data-value');
    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
    }
  }
}
