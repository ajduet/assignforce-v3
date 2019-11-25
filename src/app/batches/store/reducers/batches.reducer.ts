import { Batch } from 'src/app/shared/models';
import { createReducer, Action } from '@ngrx/store';

/*
 * Filename: batches.reducer.ts
 * Creator: August Duet
 * Created: 11/22/19
 * Issue: E/1_batches_module
 * Desc: ngrx reducer functionality for the batches feature
 * ...
 */

export interface State {
  entities: { [id: number]: Batch };
  loaded: boolean;
  loading: boolean;
  loadedOn: Date;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false,
  loadedOn: null,
};

const batchReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return batchReducer(state, action);
}

export const getBatchesLoading = (state: State) => state.loading;
export const getBatchesLoaded = (state: State) => state.loaded;
export const getBatchesLoadOn = (state: State) => state.loadedOn;
export const getBatchesEntities = (state: State) => state.entities;
