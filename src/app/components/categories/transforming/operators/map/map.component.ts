import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PeopleService} from '../../../../../services/people.service';

@Component({
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  people: any[];
  form: FormGroup;

  peopleColumns = [
    'id', 'firstname', 'lastname', 'description', 'actions'
    ];

  private peopleSub: Subscription;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.initForm();
    this.peopleService.getPeople();
    this.peopleSub = this.peopleService.peopleUpdateListener().subscribe(
      (people) => {
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
