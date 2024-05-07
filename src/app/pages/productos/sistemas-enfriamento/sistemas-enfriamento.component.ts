import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sistemas-enfriamento',
  templateUrl: './sistemas-enfriamento.component.html',
  styleUrls: ['./sistemas-enfriamento.component.scss']
})
export class SistemasEnfriamentoComponent {

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
