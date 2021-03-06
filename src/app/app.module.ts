import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ForkJoinComponent} from './components/categories/combining/operators/fork-join/fork-join.component';
import {CombineAllComponent} from './components/categories/combining/operators/combine-all/combine-all.component';
import {ConcatComponent} from './components/categories/combining/operators/concat/concat.component';
import {OfComponent} from './components/categories/creating/operators/of/of.component';
import {CatchErrorComponent} from './components/categories/error/operators/catch-error/catch-error.component';
import {CombineLatestComponent} from './components/categories/combining/operators/combine-latest/combine-latest.component';

@NgModule({
  declarations: [
    AppComponent,
    CatchErrorComponent,
    CombineAllComponent,
    CombineLatestComponent,
    ConcatComponent,
    DoTapComponent,
    FilterComponent,
    ForkJoinComponent,
    HomeComponent,
    MapComponent,
    MergeMapComponent,
    NavListComponent,
    OfComponent,
    SwitchMapComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CdkModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
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
