import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MiBolsaComponent } from './mi-bolsa/mi-bolsa.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'temas', component: TemasComponent},
  {path: 'cuenta', component: MiCuentaComponent},
  {path: 'bolsa', component: MiBolsaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
