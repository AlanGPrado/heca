import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  constructor(private elementRef: ElementRef, private translate: TranslateService) {}

  scrollToTop() {
    const window = this.elementRef.nativeElement.ownerDocument.defaultView;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLElement).getAttribute('data-value');
    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
    }
  }
}

