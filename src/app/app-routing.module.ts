import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent} from './components/principal/principal.component'; 
import { ComponentesComponent } from './components/componentes/componentes.component';
import {LoginComponent} from './components/usuario/login/login.component';
import {Page404Component} from './components/page404/page404.component';
import {ProfileComponent} from './components/usuario/profile/profile.component';
import {RegistroComponent} from './components/usuario/registro/registro.component';

const routes: Routes = [

{path:'' , component:PrincipalComponent},
{path:'componentes', component:ComponentesComponent},
{path: 'usuario/iniciarSesion', component:LoginComponent},
{path:'usuario/registro', component:RegistroComponent},
{path:'usuario/perfil', component:ProfileComponent}, //TODO: only users registrados
{path: '**', component: Page404Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
