import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import {CdkModule} from './cdk.module';
import {MaterialModule} from './material.module';

import {MockDataService} from './services/mock-data.service';

import { AppComponent } from './app.component';
import {NavListComponent} from './components/nav-list/nav-list.component';
import {FilterComponent} from './components/categories/filtering/operators/filter/filter.component';
import {MapComponent} from './components/categories/transforming/operators/map/map.component';
import {HomeComponent} from './components/home/home.component';
import {DoTapComponent} from './components/categories/utility/operators/do-tap/do-tap.component';
import {MergeMapComponent} from './components/categories/transforming/operators/merge-map/merge-map.component';
import {SwitchMapComponent} from './components/categories/transforming/operators/switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DoTapComponent,
    FilterComponent,
    HomeComponent,
    MapComponent,
    MergeMapComponent,
    NavListComponent,
    SwitchMapComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CdkModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockDataService, {dataEncapsulation: false}
    ),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
