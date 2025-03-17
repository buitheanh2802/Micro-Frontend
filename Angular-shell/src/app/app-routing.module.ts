import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
    // loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule),
  },
  // {
  //   path: '',
  //   loadChildren: () => import("Angular_remote/AuthModule").then(m => m.AuthModule),
  //   canActivate: [],
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
