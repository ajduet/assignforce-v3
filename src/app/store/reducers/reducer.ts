/*
 * Filename: reducer.ts
 * Creator: August Duet
 * Created: 10/25/19
 * Issue: N/A
 * Desc: Define the reducer function for this level of the store
 * ...
 */
import { User } from 'src/app/shared/models/user';
import { createReducer, Action, on } from '@ngrx/store';
import { NavTab } from 'src/app/shared/models';
import * as LoginActions from '../actions';
import { state } from '@angular/animations';

export interface AssignforceState {
  user: User;
  tabs: NavTab[];
  signingIn: boolean;
  signedIn: boolean;
  signingOut: boolean;
}

export const initialState: AssignforceState = {
  user: {
    email: 'svp@revature.com',
    roles: ['SVP of Technology'],
  },
  signingIn: false,
  signingOut: false,
  signedIn: true,
  tabs: [
    {
      name: 'overview',
      route: '/batches/overview',
      roles: ['*'],
    },
    {
      name: 'batches',
      route: '/batches/manage',
      roles: ['*'],
    },
    {
      name: 'curriculum',
      route: '/curriculum',
      roles: ['*'],
    },
    {
      name: 'locations',
      route: '/locations',
      roles: ['*'],
    },
    {
      name: 'trainers',
      route: '/trainers',
      roles: ['*'],
    },
    {
      name: 'profile',
      route: '/profile',
      roles: ['Trainer'],
    },
    {
      name: 'reports',
      route: '/reports',
      roles: ['SVP of Technology', 'Manager of Technology'],
    },
    {
      name: 'settings',
      route: '/settings',
      roles: ['SVP of Technology', 'Manager of Technology'],
    },
  ],
};

const applicationReducer = createReducer(
  initialState,
  on(LoginActions.StartLoginAction, (state) => ({ ...state, signingIn: true })),
  on(LoginActions.SucceedLoginAction, (state, { user }) => ({
    ...state,
    user,
    signedIn: true,
    signingIn: false,
  })),
  on(LoginActions.FailLoginAction, (state) => ({
    ...state,
    signingIn: false,
    signedIn: false,
  })),
  on(LoginActions.StartLogoutAction, (state) => ({
    ...state,
    signingOut: true,
  })),
  on(LoginActions.SucceedLogoutAction, (state) => ({
    ...state,
    user: null,
    signingOut: false,
    signedIn: false,
  }))
);

export function reducer(state: AssignforceState | undefined, action: Action) {
  return applicationReducer(state, action);
}

export const getUser = (state: AssignforceState) => {
  return state.user;
};
export const getTabs = (state: AssignforceState) => state.tabs;

export const getSignedIn = (state: AssignforceState) => state.signedIn;
export const getSigningIn = (state: AssignforceState) => state.signingIn;
export const getSigningOut = (state: AssignforceState) => state.signingOut;
