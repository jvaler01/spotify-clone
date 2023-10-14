import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    //loadChildren: () => import('./auth/auth.routes').then( m => m.routes )
    loadChildren: () => import('./dashboard/dashboard.routes').then( m => m.routes )
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then( m => m.routes )
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];