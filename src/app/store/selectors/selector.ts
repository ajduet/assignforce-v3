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
        }
      }
    }
    return uTabs;
  }
);
