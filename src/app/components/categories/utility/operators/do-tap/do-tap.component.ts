import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PeopleService} from '../../../../../services/people.service';
import {tap} from 'rxjs/internal/operators/tap';

@Component({
  templateUrl: './do-tap.component.html',
  styleUrls: ['./do-tap.component.scss']
})
export class DoTapComponent implements OnInit, OnDestroy {
  people: any[];
  form: FormGroup;
  code = `
    this.peopleSub = this.peopleService.peopleUpdateListener()
      .pipe(
        tap(
          people => console.log(people)
        )
      )
      .subscribe(
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
    this.peopleService.getPeople();
    // Il metodo do/tap viene messo prima di subscribe e
    // permette di effettuare azioni secondarie
    // che non vanno ad intaccare l'oggetto ottenuto
    this.peopleSub = this.peopleService.peopleUpdateListener()
      .pipe(
        tap(
          people => console.log(people)
        )
      )
      .subscribe(
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
}
