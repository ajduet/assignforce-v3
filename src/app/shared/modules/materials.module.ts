/*
 * Filename: materials.module.ts
 * Creator: August Duet
 * Created: 10/25/19
 * Issue: N/A
 * Desc: Include the necessary angular material modules
 * ...
 */
import { NgModule } from '@angular/core';

// material modules
import {
  MatMenuModule,
  MatButtonModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatMenuModule, MatButtonModule, MatTableModule, MatTabsModule],
  exports: [MatMenuModule, MatButtonModule, MatTableModule, MatTabsModule]
})
export class MaterialsModule {}
