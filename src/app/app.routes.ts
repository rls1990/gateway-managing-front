import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'gateway',
    title: 'Gateway',
    loadComponent: () => import('./pages/gateway/gateway.component'),
  },
  {
    path: 'loader',
    title: 'Loader',
    component: LoadingComponent,
  },
];
