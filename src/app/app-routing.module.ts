import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'libros',
    component: LibrosComponent
  },
  {
    path: 'calificaciones',
    component: CalificacionesComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },  
  {
    path: '**',
    redirectTo: 'about'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
