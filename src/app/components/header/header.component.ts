import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, router: Router) {
    // this.isHomePage = this.route.snapshot.url.length === 0 || this.route.snapshot.url[0].path === '/';
    // this.isContacto = this.route.snapshot.url.length === 0 || this.route.snapshot.url[0].path === 'contacto';
    this.isContacto = router.url === "/contacto";
    // console.log(this.isContacto)
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 100; // Change 100 to the scroll position you want
  }

  toggleDiv(event: MouseEvent) {
    this.showBurguer = !this.showBurguer;
    this.showLanguages = false;
    event.stopPropagation();
  }

  toggleDiv2(event: MouseEvent) {
    this.showLanguages = !this.showLanguages;
    this.showBurguer = false;
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
