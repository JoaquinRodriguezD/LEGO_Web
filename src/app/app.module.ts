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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

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
    NgxScrollTopModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
