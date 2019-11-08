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
        }
      }
    }
    return uTabs;
  }
);
