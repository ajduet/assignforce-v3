import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngrx
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // configure the feature level Store with its reducers
    StoreModule.forFeature('batches', {})
  ]
})
export class BatchModule {}
