import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'batches',
    loadChildren: './batch/batch.module#BatchModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'batches'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
