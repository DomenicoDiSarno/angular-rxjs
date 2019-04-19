import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {NavigationEnd, Router, Event} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public sidenav: any;
  public currentURL = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          this.currentURL.next(event.urlAfterRedirects);
        }
      }
    );
  }

  public openNav() {
    this.sidenav.open();
  }

  public closeNav() {
    this.sidenav.close();
  }
}
