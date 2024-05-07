import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-diseno-plantas-tratamiento-aguas',
  templateUrl: './diseno-plantas-tratamiento-aguas.component.html',
  styleUrls: ['./diseno-plantas-tratamiento-aguas.component.scss']
})
export class DisenoPlantasTratamientoAguasComponent {

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
