import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchesRoutingModule } from './batches-routing.module';
import { BatchesComponent } from './batches.component';
import { BatchPageComponent } from './pages/batch-page/batch-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

import * as fromServices from './services';
import { AssignforceEntityClientFactory } from '../shared/services/assignforce-entity-client-factory.service';

@NgModule({
  declarations: [BatchesComponent, BatchPageComponent, OverviewPageComponent],
  imports: [
    CommonModule,
    BatchesRoutingModule,

    // ngrx
    StoreModule.forFeature('batches', reducers),
  ],
  providers: [...fromServices.services, AssignforceEntityClientFactory],
})
export class BatchesModule {}
