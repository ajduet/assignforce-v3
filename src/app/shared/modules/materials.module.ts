import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material modules
import {
  MatMenuModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule
  ],
  exports: [MatMenuModule, MatButtonModule, MatTableModule, MatTabsModule]
})
export class MaterialsModule {}
