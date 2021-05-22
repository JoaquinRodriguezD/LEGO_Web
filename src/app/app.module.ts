import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemasComponent } from './temas/temas.component';
import { HomeComponent } from './home/home.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { MiBolsaComponent } from './mi-bolsa/mi-bolsa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [
    AppComponent,
    TemasComponent,
    HomeComponent,
    MiCuentaComponent,
    MiBolsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
