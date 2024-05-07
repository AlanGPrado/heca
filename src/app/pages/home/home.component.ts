import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild('scrollContent') scrollContent: ElementRef | undefined;
  isWide: boolean = true;

  currentIndex: number = 0;

  constructor(private el: ElementRef, private translate: TranslateService) {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
    this.isWide = window.innerWidth > 1024;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isWide = window.innerWidth > 1024;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void { // Call loopScroll after view is initialized
    if (this.scrollContent) {
      this.loopScroll(this.scrollContent);
    }
  }

  changeLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLElement).getAttribute('data-value');
    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
    }
  }

  loopScroll(content: ElementRef) {
    if (!content || !content.nativeElement) {
      console.error("Scroll content not found");
      return;
    }

    const contentWidth = content.nativeElement.offsetWidth;
    const items = content.nativeElement.querySelectorAll('.scroll-item');

    if (items.length === 0) {
      console.error("No scroll items found");
      return;
    }

    const itemWidth = items[0].offsetWidth;

    const clonedItems = Array.from(items) as HTMLElement[];

    clonedItems.forEach((item: HTMLElement) => {
      const clonedItem = item.cloneNode(true) as HTMLElement;
      content.nativeElement.appendChild(clonedItem);
    });

    let scrollPosition = 0;

    setInterval(() => {
      scrollPosition -= 1;
      if (scrollPosition < -contentWidth) {
        scrollPosition = 0;
      }

      if (content && content.nativeElement) {
        content.nativeElement.style.marginLeft = `${scrollPosition}px`;
      }
    }, 10);
  }
}
