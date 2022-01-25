import { MenuComponent } from './pages/menu/menu.component';
import { AgradecimientosComponent } from './pages/agradecimientos/agradecimientos.component';
import { ItinerarioComponent } from './pages/itinerario/itinerario.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ItinerarioComponent },
  { path: 'itinerario', component: ItinerarioComponent },
  { path: 'agradecimientos', component: AgradecimientosComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
