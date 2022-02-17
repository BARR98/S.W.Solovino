import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicNavigationComponent } from './components/public-navigation/public-navigation.component';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [PublicNavigationComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule

  ],
  exports: [
    PublicNavigationComponent
  ]
})
export class PublicSharedModule { }
