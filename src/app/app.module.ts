import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';






import {LoginComponent} from './components/usuario/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { ProfileComponent } from './components/usuario/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NuevoUsuarioComponent,
    FooterComponent,
    PrincipalComponent,
    ComponentesComponent,
    RegistroComponent,
    LoginComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
