import { Component, OnInit } from '@angular/core';
import * as fromStore from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavTab, User } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'af3-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  tabs$: Observable<NavTab[]>;
  signedIn$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.ApplicationState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.tabs$ = this.store.pipe(select(fromStore.selectTabsForUserState));
    this.signedIn$ = this.store.pipe(select(fromStore.selectSignInState));
  }
}
