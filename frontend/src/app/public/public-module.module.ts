import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PublicModuleRoutingModule } from './public-module-routing.module';
import { PublicSharedModule } from './public-shared/public-shared.module';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { PublicAdopcionesComponent } from './components/public-adopciones/public-adopciones.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { PublicNosotrosComponent } from './components/public-nosotros/public-nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { PublicPostComponent } from './components/public-post/public-post.component';
@NgModule({
  declarations: [
    PublicLayoutComponent,
    PublicAdopcionesComponent,
    DonacionesComponent,
    PublicNosotrosComponent,
    PublicPostComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    PublicModuleRoutingModule,
    PublicSharedModule,
    HttpClientModule

    ]
})
export class PublicModuleModule { }
