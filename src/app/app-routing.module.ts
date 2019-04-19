import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FilterComponent} from './components/categories/filtering/operators/filter/filter.component';
import {HomeComponent} from './components/home/home.component';
import {MapComponent} from './components/categories/transforming/operators/map/map.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'combining-observables',
    children: [
      {path: 'combine-all', component: FilterComponent},
      {path: 'combine-latest', component: FilterComponent}
    ]
  },
  {path: 'conditional-boolean-operators',
    children: [

    ]
  },
  {path: 'creating-observables',
    children: [

    ]
  },
  {path: 'error-handling-operators',
    children: [

    ]
  },
  {path: 'filtering-observables',
    children: [
      {path: 'filter', component: FilterComponent}
    ]
  },
  {path: 'transforming-observables',
    children: [
      {path: 'map', component: MapComponent},
      {path: 'merge-map', component: MapComponent},
      {path: 'switch-map', component: MapComponent}
    ]
  },
  {path: 'utility-operators',
    children: [
      {path: 'do-tap', component: MapComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
