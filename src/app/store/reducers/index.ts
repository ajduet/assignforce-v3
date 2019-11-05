import * as fromReducer from './reducer';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ApplicationState {
  assignforce: fromReducer.AssignforceState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  assignforce: fromReducer.reducer
};

export const getApplicationState = createFeatureSelector<ApplicationState>(
  'application'
);
