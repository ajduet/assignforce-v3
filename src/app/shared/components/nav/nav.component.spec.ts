<<<<<<< HEAD
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { MaterialsModule } from '../../modules/materials/materials.module';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromStore from '../../../store';
import { NavTab, User } from '../../models';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

const tabs: Array<NavTab> = [
  {
    name: 'tab1',
    route: '/tab1',
    roles: []
  },
  {
    name: 'tab2',
    route: '/tab2',
    roles: []
  }
];

const svpUser: User = {
  email: 'svp@revature.com',
  roles: ['SVP of Technology']
};

const trainerUser: User = {
  email: 'test.trainer@revature.com',
  roles: ['Trainer']
};

let root = { user: svpUser, tabs };
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
<<<<<<< HEAD
  let store: MockStore<fromStore.ApplicationState>;
  const initialState = { root };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialsModule, RouterTestingModule.withRoutes([])],
      declarations: [NavComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
=======

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
<<<<<<< HEAD
    store = TestBed.get<Store<any>>(Store);
    store.overrideSelector(fromStore.selectTabsForUserState, tabs);
    store.setState({ root });
  });

  // #E/6 Shared Navigation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // #E/6 Shared Navigation
  it('should render a login/logout link', () => {
    const elem = fixture.debugElement.nativeElement.querySelector(
      'a#signin-control'
    );
    expect(elem).toBeTruthy();
  });

  // #E/6 Shared Navigation
  it('should render logout when user logged in', () => {
    const elem = fixture.debugElement.nativeElement.querySelector(
      'a#signin-control'
    );
    expect(elem.textContent).toEqual('Logout');
  });

  // #E/6 Shared Navigation
  it('should render login when user is not logged it', () => {
    root = { user: null, tabs: null };
    store.setState({ root });
    fixture.detectChanges();
    const elem = fixture.debugElement.nativeElement.querySelector(
      'a#signin-control'
    );
    expect(elem.textContent).toEqual('Login');
  });

  // #E/6 Share Navigation
  it('should render the correct number of tabs', fakeAsync(() => {
    tick(1000);
    fixture.detectChanges();
    const elems: Array<any> = fixture.debugElement.nativeElement
      .querySelector('.mat-tab-links')
      .querySelectorAll('[mat-tab-link]');
    // + 1 for the a#signin-control
    expect(elems.length).toEqual(tabs.length + 1);
  }));
=======
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
});
