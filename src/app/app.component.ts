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
      iconName: 'recent_actors',
      route: 'combinations',
      disabled: true,
      children: [
        {
          displayName: 'combineAll',
          route: 'combine-all'
        },
        {
          displayName: 'combineLatest',
          route: 'combine-latest'
        },
      ]
    },
    {
      displayName: 'Conditionals',
      iconName: 'recent_actors',
      route: 'conditionals',
      children: [

      ]
    },
    {
      displayName: 'Creation',
      iconName: 'recent_actors',
      route: 'conditionals',
      children: [

      ]
    },
    {
      displayName: 'Errors Handling',
      iconName: 'recent_actors',
      route: 'errors-handling',
      children: [

      ]
    },
    {
      displayName: 'Filtering',
      iconName: 'recent_actors',
      route: 'filtering',
      children: [

      ]
    },
    {
      displayName: 'Multicasting',
      iconName: 'recent_actors',
      route: 'multicasting',
      children: [

      ]
    },
    {
      displayName: 'Subjects',
      iconName: 'recent_actors',
      route: 'subjects',
      children: [

      ]
    },
    {
      displayName: 'Transformation',
      iconName: 'recent_actors',
      route: 'transformation',
      children: [

      ]
    },
    {
      displayName: 'Utility',
      iconName: 'recent_actors',
      route: 'utility',
      children: [

      ]
    }
  ];

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.sidenav = this.sidenav;
  }
}
