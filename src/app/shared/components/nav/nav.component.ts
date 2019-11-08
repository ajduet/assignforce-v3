import { Component, OnInit } from '@angular/core';
import * as fromStore from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavTab, User } from '../../models';

@Component({
  selector: 'af3-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  tabs$: Observable<NavTab[]>;
  user$: Observable<User>;

  constructor(private store: Store<fromStore.ApplicationState>) {}

  ngOnInit() {
    this.tabs$ = this.store.pipe(select(fromStore.selectTabsForUserState));
    this.user$ = this.store.pipe(select(fromStore.selectUserState));
  }
}
