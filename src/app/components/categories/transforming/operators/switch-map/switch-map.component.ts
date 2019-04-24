import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import {switchMap} from 'rxjs/operators';
import {PeopleService} from '../../../../../services/people.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, OnDestroy {
  people: any[];
  peopleColumns = [
    'id', 'firstname', 'lastname', 'description'
  ];
  searchField: FormControl;
  searchForm: FormGroup;
  foundPeople: any[];
  code = `
    this.searchField.valueChanges.pipe(
      switchMap((term: string) => this.people.filter(
        person => person.firstname.toLowerCase() === term.toLowerCase()
      ))
    ).subscribe(
      (result: any) => {
        console.log(result);
        return this.foundPeople = result;
      }
    );
  `;

  private peopleSub: Subscription;

  constructor(private peopleService: PeopleService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.peopleService.getPeople();
    this.peopleSub = this.peopleService.peopleUpdateListener().subscribe(
      (people) => {
        this.people = people;
      }
    );
    this.initForm();
    this.searchField.valueChanges.pipe(
      switchMap((term: string) => this.people.filter(
        person => person.firstname.toLowerCase() === term.toLowerCase()
      ))
    ).subscribe(
      (result: any[]) => {
        this.foundPeople = [result];
      }
    );
  }

  ngOnDestroy(): void {
    this.peopleSub.unsubscribe();
  }

  initForm() {
    this.searchField = new FormControl();
    this.searchForm = this.formBuilder.group({search: this.searchField});
  }

}
