import { User } from 'src/app/shared/models/user';
<<<<<<< HEAD
import { createReducer, Action } from '@ngrx/store';
import { NavTab } from 'src/app/shared/models';

export interface AssignforceState {
  user: User;
  tabs: NavTab[];
=======
import { NavTabs } from 'src/app/shared/models/navtabs';

export interface AssignforceState {
  user: User;
  tabs: NavTabs;
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
}

export const initialState: AssignforceState = {
  user: {
    email: 'svp@revature.com',
<<<<<<< HEAD
    roles: ['Trainer']
  },
  tabs: [
    {
=======
    roles: ['SVP of Technology']
  },
  tabs: {
    overview: {
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
      name: 'overview',
      route: '/batches/overview',
      roles: ['*']
    },
<<<<<<< HEAD
    {
=======
    batches: {
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
      name: 'batches',
      route: '/batches/manage',
      roles: ['*']
    },
<<<<<<< HEAD
    {
=======
    curriculum: {
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
      name: 'curriculum',
      route: '/curriculum',
      roles: ['*']
    },
<<<<<<< HEAD
    {
=======
    locations: {
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
      name: 'locations',
      route: '/locations',
      roles: ['*']
    },
<<<<<<< HEAD
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
=======
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
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
      name: 'reports',
      route: '/reports',
      roles: ['SVP of Technology', 'Manager of Technology']
    },
<<<<<<< HEAD
    {
=======
    settings: {
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
      name: 'settings',
      route: '/settings',
      roles: ['SVP of Technology', 'Manager of Technology']
    }
<<<<<<< HEAD
  ]
};

const applicationReducer = createReducer(initialState);

export function reducer(state: AssignforceState | undefined, action: Action) {
  return applicationReducer(state, action);
}

export const getUser = (state: AssignforceState) => {
  return state.user;
};
=======
  }
};

export function reducer(state = initialState, action: any): AssignforceState {
  return state;
}

export const getUser = (state: AssignforceState) => state.user;
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
export const getTabs = (state: AssignforceState) => state.tabs;
