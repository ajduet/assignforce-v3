import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule, MetaReducer } from '@ngrx/store';

// ngrx dev
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { BatchModule } from './batch/batch.module';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // configure the Root level store with its reducers.
    //
    StoreModule.forRoot({}, { metaReducers }),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    // Feature Modules
    BatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
