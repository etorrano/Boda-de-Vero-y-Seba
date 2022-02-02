import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'veroyseba';
  displayNav = false;

  menu = [
    { id:'menu-item-85', pageId: 'page-item-77', title: 'Gracias por acompañarnos', link: '/agradecimientos'},
    { id:'menu-item-76', pageId: 'page-item-31', title: 'Itinerario', link: '/itinerario'},
    { id:'menu-item-70', pageId: 'page-item-5', title: 'Menú', link: '/menu'},
    { id:'menu-item-130', pageId: 'page-item-116', title: 'Tragos', link: '/tragos'},
    { id:'menu-item-68', pageId: 'page-item-57', title: 'Nos Cuidamos', link: '/nos-cuidamos'},
    { id:'menu-item-69', pageId: 'page-item-40', title: 'La Vida Compartida', link: '/mensaje'},
  ]

  constructor() { }

  toogleMenu() {
    this.displayNav = !this.displayNav;
  }
}
