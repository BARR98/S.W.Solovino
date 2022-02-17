import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public/components/public-layout/public-layout.component';
import { PublicModuleModule } from './public/public-module.module';
const routes: Routes = [
  {
    path: "public",
    component: PublicLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./public/public-module.module').then(m => PublicModuleModule)
      }
    ]
  },
  {
    path: "",
    redirectTo: "/public",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
