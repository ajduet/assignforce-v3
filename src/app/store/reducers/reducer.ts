import { User } from 'src/app/shared/models/user';
import { createReducer, Action } from '@ngrx/store';
import { NavTab } from 'src/app/shared/models';

export interface AssignforceState {
  user: User;
  tabs: NavTab[];
}

export const initialState: AssignforceState = {
  user: {
    email: 'svp@revature.com',
    roles: ['Trainer']
  },
  tabs: [
    {
      name: 'overview',
      route: '/batches/overview',
      roles: ['*']
    },
    {
      name: 'batches',
      route: '/batches/manage',
      roles: ['*']
    },
    {
      name: 'curriculum',
      route: '/curriculum',
      roles: ['*']
    },
    {
      name: 'locations',
      route: '/locations',
      roles: ['*']
    },
    {
      name: 'trainers',
      route: '/trainers',
      roles: ['*']
    },
    {
      name: 'profile',
      route: '/profile',
      roles: ['Trainer']
    },
    {
      name: 'reports',
      route: '/reports',
      roles: ['SVP of Technology', 'Manager of Technology']
    },
    {
      name: 'settings',
      route: '/settings',
      roles: ['SVP of Technology', 'Manager of Technology']
    }
  ]
};

const applicationReducer = createReducer(initialState);

export function reducer(state: AssignforceState | undefined, action: Action) {
  return applicationReducer(state, action);
}

export const getUser = (state: AssignforceState) => {
  return state.user;
};
export const getTabs = (state: AssignforceState) => state.tabs;
