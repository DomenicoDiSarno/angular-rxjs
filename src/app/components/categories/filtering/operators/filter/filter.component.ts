import {Component, OnDestroy, OnInit} from '@angular/core';

import {PeopleService} from '../../../../../services/people.service';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  people: any[];
  code = `
    deletePerson(id) {
      return this.httpClient.delete(this.peopleURL + '/' + id).subscribe(
        () => {
          const updatedPeople = this.people.filter(
            person => person.id !== id
          );
          this.people = updatedPeople;
          this.updatedPeople.next([...this.people]);
        }
      );
    }
  `;

  peopleColumns = [
    'id', 'firstname', 'lastname', 'description', 'actions'
  ];

  private peopleSub: Subscription;

  constructor(private peopleService: PeopleService) {}

  ngOnDestroy(): void {
    this.peopleSub.unsubscribe();
  }

  ngOnInit(): void {
    this.peopleService.getPeople();
    this.peopleSub = this.peopleService.peopleUpdateListener().subscribe(
      (people) => {
        this.people = people;
      }
    );
  }

  deletePerson(id) {
    // Ogni volta che elimino una persona il metodo effettua
    // un filtro nell'array delle persone in cui restituisce tutti
    // quegli elementi che non corrispondono a quello eliminato
    this.peopleService.deletePerson(id);
  }
}
