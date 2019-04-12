import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class FirebaseRepositoryService {
  dbURL = 'https://domenico-disarno-demo-rxjs.firebaseio.com/';

  private persons: any[] = [];
  private updatedPersons = new Subject<any[]>();

  constructor(protected httpClient: HttpClient) {}

  // Il metodo pipe viene messo prima di subscribe e
  // permette di manipolare grazie alla funzione map i
  // dati ottenuti dal server i quali saranno poi
  // visibili alla funzione subscribe
  getDemoRepository1() {
    return this.httpClient.get(this.dbURL + 'demo-repository-1.json').pipe(
      map((res: any[]) => {
        return Object.keys(res).map(
          (key) => {
            return {
              id: key,
              firstname: res[key].firstname,
              lastname: res[key].lastname,
              description: res[key].description
            };
          }
        );
      })
    ).subscribe(
      (repo) => {
        this.persons = repo;
        this.updatedPersons.next([...repo]);
      }, error1 => {
        console.error('Error on connection', error1);
      }
    );
  }

  personUpdateListener() {
    return this.updatedPersons.asObservable();
  }

  saveNewPerson(data) {
    return this.httpClient.post(this.dbURL + 'demo-repository-1.json', data);
  }

  editPerson(id, data) {
    return this.httpClient.patch(this.dbURL + 'demo-repository-1/' + id + '.json', data);
  }

  deletePerson(id) {
    return this.httpClient.delete(this.dbURL + 'demo-repository-1/' + id + '.json');
  }
}
