import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard/layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  /* {
    path: 'auth',
    //loadChildren: () => import('./auth/auth.routes').then( m => m.routes )
    loadChildren: () => import('./dashboard/dashboard.routes').then( m => m.routes )
  }, */
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then( m => m.DASHBOARD_ROUTES )
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
