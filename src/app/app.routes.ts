import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'gateway',
    title: 'Gateway',
    loadComponent: () => import('./pages/gateway/gateway.component'),
  },
  {
    path: 'gateway/add',
    title: 'Add Gateway',
    loadComponent: () =>
      import('./pages/gateway/pages/add-gateway/add-gateway.component'),
  },
];
