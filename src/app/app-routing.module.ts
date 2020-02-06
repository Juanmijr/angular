import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent} from './components/principal/principal.component'; 
import { ComponentesComponent } from './components/componentes/componentes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [

{path:'' , component:PrincipalComponent},
{path:'componentes', component:ComponentesComponent},
{path: 'iniciarSesion', component:UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
