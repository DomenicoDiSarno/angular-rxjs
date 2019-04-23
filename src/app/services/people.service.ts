import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleURL = 'api/people';
  private people: any[] = [];
  private updatedPeople = new Subject<any[]>();

  constructor(private httpClient: HttpClient) {}

  peopleUpdateListener() {
    return this.updatedPeople.asObservable();
  }

  getPeople() {
    return this.httpClient.get(this.peopleURL).subscribe(
      (people: any[]) => {
        this.people = people;
        this.updatedPeople.next([...people]);
      }
    );
  }

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
}
