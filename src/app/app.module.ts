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
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockDataService} from './services/mock-data.service';
import {MatIconModule, MatTableModule} from '@angular/material';

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
    HttpClientInMemoryWebApiModule.forRoot(
      MockDataService, {dataEncapsulation: false}
    ),
    MaterialModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
