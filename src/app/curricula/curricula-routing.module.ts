import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurriculaComponent } from './curricula.component';

const routes: Routes = [{ path: '', component: CurriculaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculaRoutingModule { }
