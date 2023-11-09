import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard-layout/dashboard-layout.component";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then( m => m.HomePageComponent ) 
      },
      { path: 'search',
        loadComponent: () => import('./pages/search-page/search-page.component').then( m => m.SearchPageComponent )
      },
      { path: 'playlist/:id',
        loadComponent: () => import('./pages/playlist-page/playlist-page.component').then( m => m.PlaylistPageComponent )
      }
      /* { path: 'playlist',
        children: [
          { path: ':id',loadComponent: () => import('./pages/playlist-page/playlist-page.component').then( m => m.PlaylistPageComponent )},
          { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
      } */,
      { path: '**', redirectTo: 'home' }
    ]
  }
];