import { User } from 'src/app/shared/models/user';
import { NavTabs } from 'src/app/shared/models/navtabs';

export interface AssignforceState {
  user: User;
  tabs: NavTabs;
}

export const initialState: AssignforceState = {
  user: {
    email: 'svp@revature.com',
    roles: ['SVP of Technology']
  },
  tabs: {
    overview: {
      name: 'overview',
      route: '/batches/overview',
      roles: ['*']
    },
    batches: {
      name: 'batches',
      route: '/batches/manage',
      roles: ['*']
    },
    curriculum: {
      name: 'curriculum',
      route: '/curriculum',
      roles: ['*']
    },
    locations: {
      name: 'locations',
      route: '/locations',
      roles: ['*']
    },
    trainers: {
      name: 'trainers',
      route: '/trainers',
      roles: ['*'],
      subTabs: [
        {
          name: 'profile',
          route: '/profile',
          roles: ['Trainer']
        }
      ]
    },
    reports: {
      name: 'reports',
      route: '/reports',
      roles: ['SVP of Technology', 'Manager of Technology']
    },
    settings: {
      name: 'settings',
      route: '/settings',
      roles: ['SVP of Technology', 'Manager of Technology']
    }
  }
};

export function reducer(state = initialState, action: any): AssignforceState {
  return state;
}

export const getUser = (state: AssignforceState) => state.user;
export const getTabs = (state: AssignforceState) => state.tabs;
