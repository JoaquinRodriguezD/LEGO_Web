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
import { environment } from 'src/environments/environment';

import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { UserProfileComponent } from './user-profile/user-profile.component';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: true,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [
    AppComponent,
    TemasComponent,
    HomeComponent,
    MiCuentaComponent,
    MiBolsaComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgbModule,
    NgxScrollTopModule,

    AngularFireModule.initializeApp(environment.firebase),

    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
