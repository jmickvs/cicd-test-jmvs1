import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./xss/xss.component').then(m => m.XssComponent) },
  { path: 'csrf-test', loadComponent: () => import('./csrf-test/csrf-test.component').then(m => m.CsrfTestComponent) }
];
