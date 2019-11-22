import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatTableModule,
  MatTabsModule,
  MatMenuModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
} from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  exports: [
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    A11yModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class MaterialsModule {}
