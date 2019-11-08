<<<<<<< HEAD
export * from './reducer';
=======
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
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
