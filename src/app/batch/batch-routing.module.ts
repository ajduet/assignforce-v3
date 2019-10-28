import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { BatchPageComponent } from './pages/batch-page/batch-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/batches/overview'
  },
  {
    path: 'batches',
    children: [
      {
        path: 'overview',
        component: OverviewPageComponent
      },
      {
        path: 'manage',
        component: BatchPageComponent
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BatchRoutingModule {}
