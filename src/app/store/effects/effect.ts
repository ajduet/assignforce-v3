import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  START_LOGIN_ACTION,
  SucceedLoginAction,
  RequireNewPasswordAction,
  FailLoginAction,
  SUCCEED_LOGIN_ACTION,
  START_LOGOUT_ACTION,
  SucceedLogoutAction,
} from '../actions';
import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { AuthResult, AuthStatus } from 'src/app/shared/models';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(START_LOGIN_ACTION),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((result: AuthResult) =>
            result.status === AuthStatus.AUTHENTICATED
              ? SucceedLoginAction({ user: result.user })
              : RequireNewPasswordAction()
          ),
          catchError((err) => {
            console.log(err);
            this.snackBar.open('You login attempt failed', null, {
              duration: 5000,
            });
            return of(FailLoginAction());
          })
        )
      )
    )
  );

  userLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(START_LOGOUT_ACTION),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => {
            this.router.navigate(['/login'], {
              queryParams: {
                action: 'login',
                return: this.router.url,
              },
            });
            return SucceedLogoutAction();
          })
        )
      )
    )
  );
}
