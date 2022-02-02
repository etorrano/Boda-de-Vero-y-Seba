import { MensajeComponent } from './pages/mensaje/mensaje.component';
import { NosCuidamosComponent } from './pages/nos-cuidamos/nos-cuidamos.component';
import { TragosComponent } from './pages/tragos/tragos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AgradecimientosComponent } from './pages/agradecimientos/agradecimientos.component';
import { ItinerarioComponent } from './pages/itinerario/itinerario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AgradecimientosComponent },
  { path: 'itinerario', component: ItinerarioComponent },
  { path: 'agradecimientos', component: AgradecimientosComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'tragos', component: TragosComponent },
  { path: 'nos-cuidamos', component: NosCuidamosComponent },
  { path: 'mensaje', component: MensajeComponent },
  { path: '**', component: AgradecimientosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
