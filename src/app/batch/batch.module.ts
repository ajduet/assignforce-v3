import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngrx
import { StoreModule } from '@ngrx/store';
import { BatchRoutingModule } from './batch-routing.module';
import { BatchPageComponent } from './pages/batch-page/batch-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';

@NgModule({
  declarations: [BatchPageComponent, OverviewPageComponent],
  imports: [
    CommonModule,
    // configure the feature level Store with its reducers
    StoreModule.forFeature('batches', {}),
    BatchRoutingModule
  ]
})
export class BatchModule {}
