import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {
  createDb() {

    const people = [
      {
        id: 1,
        firstname: 'Domenico',
        lastname: 'Di Sarno',
        description: 'Loves Dogs'
      },
      {
        id: 2,
        firstname: 'Domenico',
        lastname: 'Di Sarno',
        description: 'Loves Dogs'
      },
      {
        id: 3,
        firstname: 'Domenico',
        lastname: 'Di Sarno',
        description: 'Loves Dogs'
      },
      {
        id: 4,
        firstname: 'Domenico',
        lastname: 'Di Sarno',
        description: 'Loves Dogs'
      },
    ];

    return {people};
  }

  genId(people: any[]): number {
    return people.length > 0 ? Math.max(...people.map(person => person.id)) + 1 : 11;
  }

}
