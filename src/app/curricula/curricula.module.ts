import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculaRoutingModule } from './curricula-routing.module';
import { CurriculaComponent } from './curricula.component';


@NgModule({
  declarations: [CurriculaComponent],
  imports: [
    CommonModule,
    CurriculaRoutingModule
  ]
})
export class CurriculaModule { }
