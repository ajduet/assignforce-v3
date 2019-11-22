/*
 * Filename: index.ts
 * Creator: August Duet
 * Created: 10/25/19
 * Issue: N/A
 * Desc: Define the dispatchable actions for this level of the store
 * ...
 */
import { User } from 'src/app/shared/models';
import { createAction, props } from '@ngrx/store';

export const START_LOGIN_ACTION = '[Application] Start Login';
export const SUCCEED_LOGIN_ACTION = '[Application] Login Succeeded';
export const FAIL_LOGIN_ACTION = '[Application] Login Failed';
export const REQUIRE_NEW_PASSWORD_ACTION =
  '[Application] Login requires new password';
export const START_RESET_PASSWORD_ACTION = '[Application] Start password reset';
export const SUCCEED_RESET_PASSWORD_ACTION =
  '[Application] Password reset succeeded';
export const FAIL_RESET_PASSWORD_ACTION = '[Application] Password reset failed';
export const START_LOGOUT_ACTION = '[Application] Start Logout';
export const SUCCEED_LOGOUT_ACTION = '[Application] Logout Succeeded';

export const StartLoginAction = createAction(
  START_LOGIN_ACTION,
  props<{ email: string; password: string }>()
);
export const FailLoginAction = createAction(FAIL_LOGIN_ACTION);
export const SucceedLoginAction = createAction(
  SUCCEED_LOGIN_ACTION,
  props<{ user: User }>()
);
export const RequireNewPasswordAction = createAction(
  REQUIRE_NEW_PASSWORD_ACTION
);
export const StartResetPasswordAction = createAction(
  START_RESET_PASSWORD_ACTION,
  props<{ newPassword: string; oldPassword }>()
);
export const SucceedResetPasswordAction = createAction(
  SUCCEED_RESET_PASSWORD_ACTION
);
export const FailResetPasswordAction = createAction(FAIL_RESET_PASSWORD_ACTION);

export const StartLogoutAction = createAction(START_LOGOUT_ACTION);

export const SucceedLogoutAction = createAction(SUCCEED_LOGOUT_ACTION);
