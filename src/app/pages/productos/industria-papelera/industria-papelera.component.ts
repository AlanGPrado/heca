import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-industria-papelera',
  templateUrl: './industria-papelera.component.html',
  styleUrls: ['./industria-papelera.component.scss']
})
export class IndustriaPapeleraComponent {

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
