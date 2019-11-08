<<<<<<< HEAD
import * as fromReducer from '../reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User, NavTab } from 'src/app/shared/models';

export const rootFeatureKey = 'root';

export interface ApplicationState {
  root: fromReducer.AssignforceState;
}

export const selectApplicationState = createFeatureSelector<
  ApplicationState,
  fromReducer.AssignforceState
>(rootFeatureKey);

export const selectUserState = createSelector(
  selectApplicationState,
  fromReducer.getUser
);

export const selectTabsState = createSelector(
  selectApplicationState,
  fromReducer.getTabs
);

export const selectTabsForUserState = createSelector(
  selectUserState,
  selectTabsState,
  (user: User, tabs: NavTab[]): NavTab[] => {
    const uTabs: NavTab[] = [];
    if (user && tabs) {
      for (const tabKey in tabs) {
        if (tabs.hasOwnProperty(tabKey)) {
          const tab: NavTab = tabs[tabKey];
          if (tab.roles.includes('*')) {
            uTabs.push(tab);
          }
          if (tab.roles.some(r => user.roles.includes(r))) {
            uTabs.push(tab);
          }
=======
import * as fromFeature from '../reducers';
import * as fromAssignforce from '../reducers/reducer';

import { createSelector } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';
import { NavTabs } from 'src/app/shared/models/navtabs';
import { NavTab } from 'src/app/shared/models/navtab';

export const getAssignforceState = createSelector(
  fromFeature.getApplicationState,
  (state: fromFeature.ApplicationState) => state.assignforce
);

export const getUserState = createSelector(
  getAssignforceState,
  fromAssignforce.getUser
);

export const getTabsState = createSelector(
  getAssignforceState,
  fromAssignforce.getTabs
);

export const getTabsStateForUser = createSelector(
  getUserState,
  getTabsState,
  (user: User, tabs: NavTabs) => {
    const uTabs: NavTab[] = [];
    if (!user) {
      return uTabs;
    }

    for (const tabKey in tabs) {
      if (tabs.hasOwnProperty(tabKey)) {
        const obj = tabs[tabKey];
        if (obj.roles.includes('*')) {
          uTabs.push(obj);
        }
        if (obj.roles.some(r => user.roles.includes(r))) {
          uTabs.push(obj);
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
        }
      }
    }
    return uTabs;
  }
);
