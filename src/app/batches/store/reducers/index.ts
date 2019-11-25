import * as fromBatches from './batches.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface BatchesState {
  batches: fromBatches.State;
}

export const reducers: ActionReducerMap<BatchesState> = {
  batches: fromBatches.reducer,
};

export const getState = createFeatureSelector<BatchesState>('batches');
