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
      displayName: 'Combinations',
      iconName: 'list',
      route: 'combinations',
      children: [
        {
          displayName: 'combineAll',
          iconName: 'lens',
          route: 'combinations/combine-all',
          disabled: true,
        },
        {
          displayName: 'combineLatest',
          route: 'combinations/combine-latest',
          disabled: true,
        },
      ]
    },
    {
      displayName: 'Conditionals',
      iconName: 'list',
      route: 'conditionals',
      disabled: true,
      children: [

      ]
    },
    {
      displayName: 'Creation',
      iconName: 'list',
      route: 'conditionals',
      disabled: true,
      children: [

      ]
    },
    {
      displayName: 'Errors Handling',
      iconName: 'list',
      route: 'errors-handling',
      disabled: true,
      children: [

      ]
    },
    {
      displayName: 'Filtering',
      iconName: 'list',
      route: 'filtering',
      children: [
        {
          displayName: 'Filter',
          route: 'filtering/filter'
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
      displayName: 'Transformation',
      iconName: 'list',
      route: 'transformation',
      disabled: true,
      children: [

      ]
    },
    {
      displayName: 'Utility',
      iconName: 'list',
      route: 'utility',
      disabled: true,
      children: [

      ]
    }
  ];

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.sidenav = this.sidenav;
  }
}
