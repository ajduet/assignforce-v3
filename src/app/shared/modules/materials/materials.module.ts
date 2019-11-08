import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatTableModule, MatTabsModule, MatButtonModule, MatMenuModule],
  exports: [MatTableModule, MatTabsModule, MatButtonModule, MatMenuModule]
})
export class MaterialsModule {}
