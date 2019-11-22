
/*
 * Filename: app.component.ts
 * Creator: August Duet
 * Created: 10/25/19
 * Issue: N/A
 * Desc: The root component for the application
 * ...
 */
  
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromStore from './store';
import { User } from './shared/models';

import { switchMap, tap, filter } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'af3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AssignForce';
  requireLogin$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.ApplicationState>,
    private router: Router
  ) {}

  ngOnInit() {
    // this.checkLogin().subscribe((requireLogin) => {
    //   if (requireLogin) {
    //     this.router.navigate(['/login'], {
    //       queryParams: { action: 'login', return: '/' },
    //     });
    //   }
    // });
  }

  private checkLogin(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.selectUserState),
      switchMap((user: User) => (user ? of(false) : of(true)))
    );
  }
}
