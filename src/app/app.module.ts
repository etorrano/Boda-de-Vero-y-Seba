import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItinerarioComponent } from './pages/itinerario/itinerario.component';
import { MenuComponent } from './pages/menu/menu.component';
import { TragosComponent } from './pages/tragos/tragos.component';
import { NosCuidamosComponent } from './pages/nos-cuidamos/nos-cuidamos.component';
import { MensajeComponent } from './pages/mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ItinerarioComponent,
    MenuComponent,
    TragosComponent,
    NosCuidamosComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
