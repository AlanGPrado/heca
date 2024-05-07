import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clarificacion-y-filtracion',
  templateUrl: './clarificacion-y-filtracion.component.html',
  styleUrls: ['./clarificacion-y-filtracion.component.scss']
})
export class ClarificacionYFiltracionComponent {

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
