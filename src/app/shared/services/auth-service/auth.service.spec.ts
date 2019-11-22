import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthStatus } from '../cognito/cognito-user.service';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return success status on success', () => {
    const success: AuthStatus = {
      status: 'authenticated',
      user: { email: 'svp@revature.com', roles: ['SVP of Technology'] }
    };
    const expected = cold('(a|)', { a: success });
    expect(service.login('svp@revature.com', 'password123')).toBeObservable(
      expected
    );
  });
});
