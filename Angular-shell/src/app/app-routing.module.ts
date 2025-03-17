import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';

<<<<<<< HEAD
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
=======
const routes: Routes = [];
>>>>>>> f653616 (222)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
