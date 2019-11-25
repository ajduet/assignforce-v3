import { Injectable } from '@angular/core';
import { BatchService } from '../../services';
import * as fromActions from '../actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class BatchesEffect {
  constructor(private batchService: BatchService, private actions$: Actions) {}

  loadBatches$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_BATCHES),
      switchMap(() => this.batchService.getAllBatches)
    )
  );
}
