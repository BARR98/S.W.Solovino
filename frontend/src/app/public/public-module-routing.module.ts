import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { PublicAdopcionesComponent } from './components/public-adopciones/public-adopciones.component';
import { PublicNosotrosComponent } from './components/public-nosotros/public-nosotros.component';
import { PublicPostComponent } from './components/public-post/public-post.component';

const routes: Routes = [
  {
    path: "posts",
    component: PublicPostComponent
  },

  {
    path:"adopciones",
    component:PublicAdopcionesComponent
  },
  {
    path:"donaciones",
    component:DonacionesComponent
  },
  {
    path:"nosotros",
    component:PublicNosotrosComponent
  },
  {
    path: "",
    component: PublicPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicModuleRoutingModule { }
