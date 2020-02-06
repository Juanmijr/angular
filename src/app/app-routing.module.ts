import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent} from './components/principal/principal.component'; 
import { ComponentesComponent } from './components/componentes/componentes.component';

const routes: Routes = [

{path:'' , component:PrincipalComponent},
{path:'componentes', component:ComponentesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
