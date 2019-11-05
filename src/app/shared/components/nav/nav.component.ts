import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../store';
import { Observable } from 'rxjs/';
import { NavTab } from '../../models/navtab';

@Component({
  selector: 'af3-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  tabs$: Observable<NavTab[]>;
  constructor(private store: Store<fromStore.ApplicationState>) {}

  ngOnInit() {
    this.tabs$ = this.store.select(fromStore.getTabsStateForUser);
  }
}
