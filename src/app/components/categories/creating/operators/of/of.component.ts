import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';

@Component({
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  source = of(1, 2, 3, 4, 5);
  result: any[] = [];
  code = `
    this.source.subscribe(
      val => {
        this.result.push(val);
      }
    );
  `;

  constructor() {}

  ngOnInit(): void {
    // L'operatore of restituisce tutti i valori dell'oggetto
    // in sequenza nell'ordine in cui sono passati.
    this.source.subscribe(
      val => {
        this.result.push(val);
      }
    );
  }
}
