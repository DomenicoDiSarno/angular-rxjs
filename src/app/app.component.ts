import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {NavService} from './services/nav.service';
import {NavItem} from './interfaces/nav-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  events: string[] = [];
  isOpen: boolean;

  @ViewChild('sidenav') sidenav: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'Combining Observables',
      iconName: 'list',
      route: 'combining-observables',
      children: [
        {
          displayName: 'combineAll',
          route: 'combining-observables/combine-all',
          disabled: true
        },
        {
          displayName: 'combineLatest',
          route: 'combining-observables/combine-latest',
          disabled: true,
        },
        {
          displayName: 'concat',
          route: 'combining-observables/concat'
        },
        {
          displayName: 'forkJoin',
          route: 'combining-observables/fork-join'
        }
      ]
    },
    {
      displayName: 'Conditional and Boolean Operators',
      iconName: 'list',
      route: 'conditional-boolean-operators',
      disabled: true,
      children: [

      ]
    },
    {
      displayName: 'Creating Observables',
      iconName: 'list',
      route: 'creating-observables',
      children: [
        {
          displayName: 'of',
          route: 'creating-observables/of'
        }
      ]
    },
    {
      displayName: 'Error Handling Operators',
      iconName: 'list',
      route: 'error-handling-operators',
      children: [
        {
          displayName: 'catchError',
          route: 'error-handling-operators/catch-error'
        }
      ]
    },
    {
      displayName: 'Filtering Observables',
      iconName: 'list',
      route: 'filtering-observables',
      children: [
        {
          displayName: 'filter',
          route: 'filtering-observables/filter'
        }
      ]
    },
    {
      displayName: 'Multicasting',
      iconName: 'list',
      route: 'multicasting',
      disabled: true,
      children: [

      ]
    },
    {
      displayName: 'Subjects',
      iconName: 'list',
      route: 'subjects',
      disabled: true,
      children: [

      ]
    },
    {
      displayName: 'Transforming Observables',
      iconName: 'list',
      route: 'transforming-observables',
      children: [
        {
          displayName: 'map',
          route: 'transforming-observables/map'
        },
        {
          displayName: 'mergeMap',
          route: 'transforming-observables/merge-map',
        },
        {
          displayName: 'switchMap',
          route: 'transforming-observables/switch-map',
        },
      ]
    },
    {
      displayName: 'Utility Operators',
      iconName: 'list',
      route: 'utility-operators',
      children: [
        {
          displayName: 'do/tap',
          route: 'utility-operators/do-tap'
        },
      ]
    }
  ];

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.sidenav = this.sidenav;
  }
}
