import { TestBed, async } from '@angular/core/testing';
import { fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BatchModule } from './batch/batch.module';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { Location } from '@angular/common';
import { OverviewPageComponent } from './batch/pages/overview-page/overview-page.component';
import { NgModuleFactoryLoader } from '@angular/core';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        BatchModule,
        StoreModule.forRoot({})
      ],
      declarations: [AppComponent]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  }));

  //  #E/1 (Create Batch Module)
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // #E/1 (Create Batch Module)
  it('should navigate to overview from root', fakeAsync(() => {
    router.navigateByUrl('');
    tick();
    expect(location.path()).toBe('/batches/overview');
  }));

  // #E/1 (Create Batch Module)
  it('should navigate to manage', fakeAsync(() => {
    router.navigate(['/batches/manage']);
    tick();
    expect(location.path()).toBe('/batches/manage');
  }));

  // #E/1 (Create Batch Module)
  it('should navigate to overview', fakeAsync(() => {
    router.navigate(['/batches/overview']);
    tick();
    expect(location.path()).toBe('/batches/overview');
  }));

  // #E/1 (Create Batch Module)
  it('should navigate to overview on load', fakeAsync(() => {
    router.navigateByUrl('');
    tick();
    expect(location.path()).toBe('/batches/overview');
  }));

  // #E/1 (Create Batch Module)
  it('should navigate to overview on unknown route', fakeAsync(() => {
    router.navigateByUrl('/not-going');
    tick();
    expect(location.path()).toBe('/batches/overview');
  }));
});
