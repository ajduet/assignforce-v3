import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'trainers',
    loadChildren: () =>
      import('./trainers/trainers.module').then((m) => m.TrainersModule),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: 'curriculum',
    loadChildren: () =>
      import('./curricula/curricula.module').then((m) => m.CurriculaModule),
  },
  {
    path: 'batches',
    loadChildren: () =>
      import('./batches/batches.module').then((m) => m.BatchesModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
