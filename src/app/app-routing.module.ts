import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/batches/overview'
  },
  {
    path: 'batches',
    loadChildren: './batch/batch.module#BatchModule'
  },
  {
    path: '**',
    redirectTo: '/batches/overview'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
