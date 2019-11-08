import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import * as fromStore from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavTab, User } from '../../models';
=======
import { Store } from '@ngrx/store';

import * as fromStore from '../../../store';
import { Observable } from 'rxjs/';
import { NavTab } from '../../models/navtab';
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3

@Component({
  selector: 'af3-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  tabs$: Observable<NavTab[]>;
<<<<<<< HEAD
  user$: Observable<User>;

  constructor(private store: Store<fromStore.ApplicationState>) {}

  ngOnInit() {
    this.tabs$ = this.store.pipe(select(fromStore.selectTabsForUserState));
    this.user$ = this.store.pipe(select(fromStore.selectUserState));
=======
  constructor(private store: Store<fromStore.ApplicationState>) {}

  ngOnInit() {
    this.tabs$ = this.store.select(fromStore.getTabsStateForUser);
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
  }
}
