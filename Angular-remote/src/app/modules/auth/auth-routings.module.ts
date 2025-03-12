import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { AuthLayoutComponent } from 'src/app/shareds/layouts/auth/auth.component';

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: '/signin'
        },
        {
            path: 'signin',
            component: LoginComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
