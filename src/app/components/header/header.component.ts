import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled: boolean = false;
  // isHomePage: boolean;
  isContacto: boolean;
  showBurguer: boolean = false;
  showLanguages: boolean = false;
  windowWidth: number = 0;
  showProductsMobile: boolean = false;

  constructor(private route: ActivatedRoute, router: Router, private translate: TranslateService) {
    // this.isHomePage = this.route.snapshot.url.length === 0 || this.route.snapshot.url[0].path === '/';
    // this.isContacto = this.route.snapshot.url.length === 0 || this.route.snapshot.url[0].path === 'contacto';
    this.isContacto = router.url === "/contacto";
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    // Update window width on resize
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 100; // Change 100 to the scroll position you want
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLElement).getAttribute('data-value');
    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
    }
  }

  toggleDiv(event: MouseEvent) {
    this.showBurguer = !this.showBurguer;
    this.showLanguages = false;
    event.stopPropagation();
    this.showProductsMobile = false;

  }

  toggleDiv2(event: MouseEvent) {
    this.showLanguages = !this.showLanguages;
    this.showBurguer = false;
    event.stopPropagation();
  }

  toggleDiv3(event: MouseEvent) {
    this.showProductsMobile = !this.showProductsMobile;
    event.stopPropagation();
  }

  private isInsideAnyMenu(target: HTMLElement): boolean {
    return !!target.closest('.submenu-mobile');
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.isInsideAnyMenu(event.target as HTMLElement)) {
      this.showBurguer = false;
      this.showLanguages = false;
    }
  }

}
