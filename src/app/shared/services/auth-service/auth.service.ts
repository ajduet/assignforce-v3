/*
 * Filename: auth.service.ts
 * Creator: August Duet
 * Created: 11/13/19
 * Issue: E/6 Shared Navigation
 * Desc: Provide authentication through aws cognito
 * ...
 */
import { Injectable } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, AuthResult } from '../../models';
import { CognitoUserService } from '../cognito/cognito-user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cognitoUserService: CognitoUserService) {}

  login(email: string, password: string): Observable<AuthResult> {
    return this.cognitoUserService.login(email, password);
  }

  logout(): Observable<any> {
    return this.cognitoUserService.logout();
  }
}
