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
    { id:'menu-item-85', title: 'Gracias por acompañarnos', link: '/agradecimientos'},
    { id:'menu-item-76', title: 'Itinerario', link: '/itinerario'},
    { id:'menu-item-70', title: 'Menú', link: '/menu'},
    /* { id:'', title: '', link: ''}, */
  ]

  constructor() { }

  toogleMenu() {
    this.displayNav = !this.displayNav;
  }
}
