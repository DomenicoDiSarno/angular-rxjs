import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import {mergeMap} from 'rxjs/internal/operators/mergeMap';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  combinedResult: string;
  firstname: any;
  firstnameObs: any;
  lastname: any;
  lastnameObs: any;
  code = `
    this.firstnameObs.pipe(mergeMap(
      (event1: Event) => {
        return this.lastnameObs.pipe(map(
          (event2: Event) => {
            return event1.target.value + ' ' + event2.target.value;
          }
        ));
      }
    )).subscribe(
      (res) => {
        this.combinedResult = res;
      }
    );
  `;

  constructor() {}

  ngOnInit(): void {
    // Il metodo mergeMap elabora ed unisce tra loro due o più osservabili
    // e ne restituisce i valori in un unico oggetto risultante
    this.firstname = document.querySelector('#firstname');
    this.lastname = document.querySelector('#lastname');

    this.firstnameObs = Observable.fromEvent(this.firstname, 'input');
    this.lastnameObs = Observable.fromEvent(this.lastname, 'input');

    this.firstnameObs.pipe(mergeMap(
      (event1: Event) => {
        return this.lastnameObs.pipe(map(
          (event2: Event) => {
            return event1.target.value + ' ' + event2.target.value;
          }
        ));
      }
    )).subscribe(
      (res) => {
        this.combinedResult = res;
      }
    );
  }

}
