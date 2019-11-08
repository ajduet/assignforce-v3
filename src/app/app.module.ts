import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule, MetaReducer } from '@ngrx/store';

// stores
<<<<<<< HEAD
import * as fromStore from './store';
=======
import { reducers as appReducer } from './store';
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3

// ngrx dev
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/components/nav/nav.component';
import { MaterialsModule } from './shared/modules/materials/materials.module';
=======
import { BatchModule } from './batch/batch.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/components/nav/nav.component';
import { MatTabsModule } from '@angular/material';
import { MaterialsModule } from './shared/modules/materials.module';
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // configure the Root level store with its reducers.
    //
<<<<<<< HEAD
    StoreModule.forRoot({ root: fromStore.reducer }, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // Feature Modules
=======
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('application', appReducer),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    // Feature Modules
    BatchModule,
>>>>>>> 6dae3aed52d7a9ecc112abbc5690c4b5220e17c3

    // Material
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
