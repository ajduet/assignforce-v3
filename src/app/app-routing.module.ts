import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD

const routes: Routes = [];
=======
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
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class AppRoutingModule {}
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
