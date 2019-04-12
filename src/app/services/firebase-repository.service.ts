import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FirebaseRepositoryService {
  dbURL = 'https://domenico-disarno-demo-rxjs.firebaseio.com/';

  constructor(protected httpClient: HttpClient) {}

  getDemoRepository1() {
    return this.httpClient.get(this.dbURL + 'demo-repository-1.json');
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
