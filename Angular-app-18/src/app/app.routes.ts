import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('angular_app_15/NotFound').then(m => {
            console.log(m);
            return m
        }),
        // component: 
    }
];
