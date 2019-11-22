import { AuthStatus } from './auth-status.enum';
import { User } from './user';

export interface AuthResult {
  status: AuthStatus;
  user?: User;
  error?: any;
}
