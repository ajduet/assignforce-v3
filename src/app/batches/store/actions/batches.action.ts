import { createAction, props } from '@ngrx/store';
import { Batch } from 'src/app/shared/models';

export const LOAD_BATCHES = '[Batches] Load batches';
export const SUCCEED_LOAD_BATCHES = '[Batches] Load batches success';
export const FAIL_LOAD_BATCHES = '[Batches] Load batches fail';
export const ADD_BATCH = '[Batches] Add batch';
export const SUCCEED_ADD_BATCH = '[Batches] Add batch success';
export const FAIL_ADD_BATCH = '[Batches] Add batch fail';
export const UPDATE_BATCH = '[Batches] Update batch';
export const SUCCEED_UPDATE_BATCH = '[Batches] Update batch success';
export const FAIL_UPDATE_BATCH = '[Batches] Update batch fail';
export const DELETE_BATCH = '[Batches] Delete batch';
export const SUCCEED_DELETE_BATCH = '[Batches] Delete batch success';
export const FAIL_DELETE_BATCH = '[Batches] Delete batch fail';

export const LoadBatches = createAction(LOAD_BATCHES);
export const SucceedLoadBatches = createAction(
  SUCCEED_LOAD_BATCHES,
  props<{ batches: Batch[] }>()
);
export const FailLoadBatches = createAction(
  FAIL_LOAD_BATCHES,
  props<{ error: any }>()
);
export const AddBatch = createAction(ADD_BATCH, props<{ batch: Batch }>());
export const SucceedAddBatch = createAction(SUCCEED_ADD_BATCH);
export const FailAddBatch = createAction(
  FAIL_ADD_BATCH,
  props<{ error: any }>()
);
export const UpdateBatch = createAction(
  UPDATE_BATCH,
  props<{ batch: Batch }>()
);
export const SucceedUpdateBatch = createAction(SUCCEED_UPDATE_BATCH);
export const FailUpdateBatch = createAction(
  FAIL_UPDATE_BATCH,
  props<{ error: any }>()
);
export const DeleteBatch = createAction(DELETE_BATCH, props<{ id: number }>());
export const SucceedDeleteBatch = createAction(SUCCEED_DELETE_BATCH);
export const FailDeleteBatch = createAction(
  FAIL_DELETE_BATCH,
  props<{ error: any }>()
);
