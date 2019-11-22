/*
 * Filename: login.component.ts
 * Creator: August Duet
 * Created: 11/13/19
 * Issue: #E/6 Shared navigation
 * Desc: Essential component for navigation. The navbar requires a logged in user to
 * properly show tabs
 * ...
 */
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromStore from '../../../store';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';
import { Observable } from 'rxjs';
import { StartLogoutAction } from '../../../store';

interface FormData {
  email: string;
  password: string;
}

@Component({
  selector: 'af3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  action: string;
  returnUrl: string;
  username: string;
  password: string;
  loginForm: FormGroup;
  errorMessage: string;
  signingIn$: Observable<boolean>;
  signedIn$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.ApplicationState>,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.signingIn$ = this.store.pipe(select(fromStore.selectSigningInState));
    this.signedIn$ = this.store.pipe(select(fromStore.selectSignInState));
    this.route.queryParams.subscribe((params) => {
      this.action = params.action || 'login';
      this.returnUrl = params.returnUrl || 'batches/overview';

      if (this.action === 'logout') {
        this.store.dispatch(StartLogoutAction());
      }
    });
    this.signedIn$.subscribe((signedIn) => {
      if (signedIn) {
        this.router.navigate([this.returnUrl]);
      }
    });
  }

  login(formData: FormData) {
    const { email, password } = formData;
    this.store.dispatch(fromStore.StartLoginAction({ email, password }));
    this.loginForm.get('password').reset();
  }
}
