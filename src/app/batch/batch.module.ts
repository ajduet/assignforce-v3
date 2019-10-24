import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngrx
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('batches', {})]
})
export class BatchModule {}
