import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin} from 'rxjs';

@Component({
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  url1: string;
  url2: string;
  url3: string;
  code = `
    launchForkJoinExample(url1, url2, url3) {
    const obs1 = this.httpClient.get(url1);
    const obs2 = this.httpClient.get(url2);
    const obs3 = this.httpClient.get(url3);

    return forkJoin([obs1, obs2, obs3]);
  }
  `;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  launchForkJoinExample(url1, url2, url3) {

    const obs1 = this.httpClient.get(url1);
    const obs2 = this.httpClient.get(url2);
    const obs3 = this.httpClient.get(url3);

    /* La funzione forkJoin permette di ritornare
    * tutti gli ultimi valori degli osservabili
    * che sono stati completati e li restituisce
    * contemporaneamente
    */

    return forkJoin([obs1, obs2, obs3]);
  }
}
