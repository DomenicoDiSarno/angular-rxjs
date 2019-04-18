import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {PipeFilterComponent} from './components/PipeFilterComponent/pipe-filter.component';
import {PipeMapComponent} from './components/PipeMapComponent/pipe-map.component';

const routes: Routes = [
  {path: '', component: PipeMapComponent},
  {path: 'filter', component: PipeFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
