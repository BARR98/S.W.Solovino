import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './public/components/public-layout/public-layout.component';
import { Router, RouterModule } from '@angular/router';
import { PublicPostComponent } from './public/components/public-post/public-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicModuleModule } from './public/public-module.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
@NgModule({
  declarations: [
    AppComponent,

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    PublicModuleModule,
    MaterialModuleModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
