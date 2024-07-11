import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => 
    import('./pages/login/login.component').
    then(m => m.default)
  },
   {
    path: 'register',
    loadComponent: () => 
    import('./pages/register/register.component').
    then(m => m.default)
  },
   {
    path: 'forget-password',
    loadComponent: () => 
    import('./pages/forget-password/forget-password.component').
    then(m => m.default)
  },
   {
    path: 'home',
    loadComponent: () => 
    import('./pages/home/home.component').
    then(m => m.default)
  },
  {
    path: 'reset/:token',
    loadComponent: () => 
    import('./pages/reset/reset.component').
    then(m => m.default)
  },
];
