import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  constructor(private el: ElementRef) {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
  }
}
