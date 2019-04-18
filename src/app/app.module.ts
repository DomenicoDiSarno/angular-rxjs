import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import {RepositoryModule} from './services/repository.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {PipeFilterComponent} from './components/PipeFilterComponent/pipe-filter.component';
import {PipeMapComponent} from './components/PipeMapComponent/pipe-map.component';
import {HeaderComponent} from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PipeFilterComponent,
    PipeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RepositoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
