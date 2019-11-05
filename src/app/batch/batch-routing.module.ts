import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { BatchPageComponent } from './pages/batch-page/batch-page.component';
import { BatchComponent } from './batch.component';

export const routes: Routes = [
  {
    path: 'overview',
    component: OverviewPageComponent
  },
  {
    path: 'manage',
    component: BatchPageComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule {}
