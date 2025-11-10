import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', loadComponent: () => import('./csrf-test.component').then(m => m.CsrfTestComponent) }])
  ]
})
export class CsrfTestModule {}
