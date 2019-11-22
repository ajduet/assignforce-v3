/*
 * Filename: cognito-user.service.ts
 * Creator: August Duet
 * Created: 11/14/19
 * Issue: E/6 Shared Navigation
 * Desc: Provide abstraction for authentication through aws cognito
 * ...
 */
import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { AuthResult, AuthStatus } from '../../models';
import { Subscriber, Observable, from } from 'rxjs';
import { CognitoUser } from '@aws-amplify/auth';
Amplify.configure({
  Auth: {
    region: environment.aws.region,
    userPoolId: environment.aws.cognito.UserPoolId,
    userPoolWebClientId: environment.aws.cognito.ClientId,
  },
});

@Injectable({
  providedIn: 'root',
})
export class CognitoUserService {
  private challengeUser: CognitoUser;

  constructor() {}

  login(email: string, password: string): Observable<AuthResult> {
    return new Observable((subscriber: Subscriber<AuthResult>) => {
      Auth.signIn(email, password)
        .then((response) => {
          if (!response.challengeName) {
            subscriber.next(this.success(response));
          } else if (response.challengeName === 'NEW_PASSWORD_REQUIRED') {
            this.challengeUser = response as CognitoUser;
            subscriber.next(this.newPassword());
          }
        })
        .catch((error) => subscriber.error(this.error(error)));
    });
  }

  logout(): Observable<any> {
    return from(Auth.signOut());
  }

  private success(user: CognitoUser): AuthResult {
    return {
      status: AuthStatus.AUTHENTICATED,
      user: {
        email: user.getUsername(),
        roles: user
          .getSignInUserSession()
          .getIdToken()
          .decodePayload()
          .roles.split('|'),
      },
    };
  }

  private error(error: any): AuthResult {
    return {
      status: AuthStatus.ERROR,
      error,
    };
  }

  private newPassword(): AuthResult {
    return {
      status: AuthStatus.REQUIRE_NEW_PASSWORD,
    };
  }
}
