import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  constructor(private el: ElementRef) {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
  }
}
