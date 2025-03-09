import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './modules/admin/notfound.component';
import { LoginComponent } from './modules/auth/login.component';
import { AuthGuard } from './shareds/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    // pathMatch: 'full',
    component: LoginComponent,
    data: { name: 'BuiTheAnh' },
    canActivate: [
      AuthGuard
    ],
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
