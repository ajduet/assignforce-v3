import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchesComponent } from './batches.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { BatchPageComponent } from './pages/batch-page/batch-page.component';

const routes: Routes = [
  {
    path: '',
    component: BatchesComponent,
    children: [
      {
        path: 'manage',
        component: BatchPageComponent,
      },
      {
        path: 'overview',
        component: OverviewPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatchesRoutingModule {}
