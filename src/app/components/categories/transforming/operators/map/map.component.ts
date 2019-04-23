import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PeopleService} from '../../../../../services/people.service';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  people: any[];
  form: FormGroup;
  code = `
    this.peopleSub = this.peopleService.peopleUpdateListener().pipe(
      map((people) => {
        return people.map(person => {
          return {
            mappedID: person.id,
            mappedFirstname: person.firstname,
            mappedLastname: person.lastname,
            mappedDescription: 'Mapped data: ' + person.description
          };
        });
      })
    ).subscribe(
      (people: any) => {
        this.people = people;
      }
    );
  `;

  peopleColumns = [
    'id', 'firstname', 'lastname', 'description'
    ];

  private peopleSub: Subscription;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.initForm();
    this.peopleService.getPeople();
    // Il metodo pipe viene messo prima di subscribe e
    // permette di manipolare grazie alla funzione map i
    // dati ottenuti dal server i quali saranno poi
    // visibili alla funzione subscribe
    this.peopleSub = this.peopleService.peopleUpdateListener().pipe(
      map((people) => {
        return people.map(person => {
          return {
            mappedID: person.id,
            mappedFirstname: person.firstname,
            mappedLastname: person.lastname,
            mappedDescription: 'Mapped data: ' + person.description
          };
        });
      })
    ).subscribe(
      (people: any) => {
        this.people = people;
      }
    );
  }

  ngOnDestroy(): void {
    // IMPORTANTE: Ricordarsi sempre di fare l'unsubscribe per il listener in modo da
    // svuotare la memoria temporanea
    this.peopleSub.unsubscribe();
  }

  initForm() {
    this.form = new FormGroup({
      firstname: new FormControl(null,
        {
          validators: [Validators.required]
        }),
      lastname: new FormControl(null,
        {
          validators: [Validators.required]
        }),
      description: new FormControl(null,
        {
          validators: [Validators.required,
            Validators.minLength(3)]
        })
    });
  }

  submitForm() {
    if (this.form.invalid) {
      return;
    }
    const data = {
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      description: this.form.value.description
    };

    // Effettuo un subscribe per ottenere un messaggio positivo
    // in caso di avvenuto salvataggio utente
    // this.firebaseRepositoryService.saveNewPerson(data).subscribe(
    //   (res) => {
    //     this.getDemoRepository1();
    //   }
    // );
    this.form.reset();
  }

  editPerson(id) {
    console.log(id);
  }
}
