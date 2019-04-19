import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {PipeFilterComponent} from './components/Operators/PipeFilterComponent/pipe-filter.component';
import {PipeMapComponent} from './components/Operators/PipeMapComponent/pipe-map.component';

const routes: Routes = [
  {path: '', component: PipeMapComponent, pathMatch: 'full'},
  {path: 'filtering',
    children: [
      {path: 'filter', component: PipeFilterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
