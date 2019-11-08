import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialsModule } from './shared/modules/materials/materials.module';
import { NavComponent } from './shared/components/nav/nav.component';
import { TestService } from './shared/services/test.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialsModule],
      declarations: [AppComponent, NavComponent],
      providers: [TestService]
    }).compileComponents();
  }));

=======
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
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'assignforce-v3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('assignforce-v3');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'assignforce-v3 app is running!'
    );
  });
=======
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
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3
});
