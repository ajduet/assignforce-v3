import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchesRoutingModule } from './batches-routing.module';
import { BatchesComponent } from './batches.component';
import { BatchPageComponent } from './pages/batch-page/batch-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';


@NgModule({
  declarations: [BatchesComponent, BatchPageComponent, OverviewPageComponent],
  imports: [
    CommonModule,
    BatchesRoutingModule
  ]
})
export class BatchesModule { }
