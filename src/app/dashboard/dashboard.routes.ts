import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard-layout/dashboard-layout.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then( m => m.HomePageComponent ) 
      },
      { path: 'playlist',
        loadComponent: () => import('./pages/playlist-page/playlist-page.component').then( m => m.PlaylistPageComponent )
      },
      { path: '**', redirectTo: 'home' }
    ]
  }
];