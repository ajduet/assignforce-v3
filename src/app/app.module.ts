import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule, MetaReducer } from '@ngrx/store';

// stores
import { reducers as appReducer } from './store';

// ngrx dev
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { BatchModule } from './batch/batch.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/components/nav/nav.component';
import { MatTabsModule } from '@angular/material';
import { MaterialsModule } from './shared/modules/materials.module';

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
    StoreModule.forRoot({}, { metaReducers }),
    StoreModule.forFeature('application', appReducer),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    // Feature Modules
    BatchModule,

    // Material
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
