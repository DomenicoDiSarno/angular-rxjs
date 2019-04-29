import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FilterComponent} from './components/categories/filtering/operators/filter/filter.component';
import {HomeComponent} from './components/home/home.component';
import {MapComponent} from './components/categories/transforming/operators/map/map.component';
import {DoTapComponent} from './components/categories/utility/operators/do-tap/do-tap.component';
import {MergeMapComponent} from './components/categories/transforming/operators/merge-map/merge-map.component';
import {SwitchMapComponent} from './components/categories/transforming/operators/switch-map/switch-map.component';
import {ForkJoinComponent} from './components/categories/combining/operators/fork-join/fork-join.component';
import {CombineAllComponent} from './components/categories/combining/operators/combine-all/combine-all.component';
import {ConcatComponent} from './components/categories/combining/operators/concat/concat.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'combining-observables',
    children: [
      {path: 'combine-all', component: CombineAllComponent},
      {path: 'combine-latest', component: FilterComponent},
      {path: 'concat', component: ConcatComponent},
      {path: 'fork-join', component: ForkJoinComponent}
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
      {path: 'merge-map', component: MergeMapComponent},
      {path: 'switch-map', component: SwitchMapComponent}
    ]
  },
  {path: 'utility-operators',
    children: [
      {path: 'do-tap', component: DoTapComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
