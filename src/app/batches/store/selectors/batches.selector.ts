import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromBatches from '../reducers/batches.reducer';

export const getBatchesState = createSelector(
  fromFeature.getState,
  (state: fromFeature.BatchesState) => state.batches
);

export const getBatchesEntities = createSelector(
  getBatchesState,
  fromBatches.getBatchesEntities
);

export const getBatchesLoading = createSelector(
  getBatchesState,
  fromBatches.getBatchesLoading
);

export const getBatchesLoaded = createSelector(
  getBatchesState,
  fromBatches.getBatchesLoaded
);

export const getBatchesLoadOn = createSelector(
  getBatchesState,
  fromBatches.getBatchesLoadOn
);
