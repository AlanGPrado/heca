import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollContent') scrollContent: ElementRef | undefined;

  currentIndex: number = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
  }

  ngOnInit(): void {
    setTimeout(() => { // Ensure ViewChild is set before accessing it
      this.loopScroll();
    });
  }

  loopScroll(): void {
    if (!this.scrollContent || !this.scrollContent.nativeElement) {
      console.error("Scroll content not found");
      return;
    }

    const contentWidth = this.scrollContent.nativeElement.offsetWidth;
    const items = this.scrollContent.nativeElement.querySelectorAll('.scroll-item');

    if (items.length === 0) {
      console.error("No scroll items found");
      return;
    }

    const itemWidth = items[0].offsetWidth;

    // Cast items to HTMLElement[]
    const clonedItems = Array.from(items) as HTMLElement[];

    clonedItems.forEach((item: HTMLElement) => {
      const clonedItem = item.cloneNode(true) as HTMLElement;
      this.scrollContent?.nativeElement.appendChild(clonedItem);
    });

    let scrollPosition = 0;

    setInterval(() => {
      scrollPosition -= 1;
      if (scrollPosition < -contentWidth) {
        scrollPosition = 0;
      }

      // Null check for scrollContent.nativeElement
      if (this.scrollContent && this.scrollContent.nativeElement) {
        this.scrollContent.nativeElement.style.marginLeft = `${scrollPosition}px`;
      }
    }, 10);
  }
}
