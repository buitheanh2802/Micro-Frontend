import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'prefix',
        component: AdminComponent,
      },
    ]),
  ],
  exports: [

  ],
})
export class AdminModule {
  public getComponents() {
    return AdminComponent;
  }
}
