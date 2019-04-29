import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concat, of} from 'rxjs';

@Component({
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
  url1: string;
  url2: string;
  url3: string;
  result: any;
  code = `
    concatExample(url1, url2, url3) {

    const obs1 = this.httpClient.get(url1);
    const obs2 = this.httpClient.get(url2);
    const obs3 = this.httpClient.get(url3);

    const conc1 = of(obs1);
    const conc2 = of(obs2);
    const conc3 = of(obs3);

    return concat(conc1, conc2, conc3).subscribe(
      (res) => {
        this.result = res;
      }
    );
  }
  `;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  concatExample(url1, url2, url3) {

    const obs1 = this.httpClient.get(url1);
    const obs2 = this.httpClient.get(url2);
    const obs3 = this.httpClient.get(url3);

    const conc1 = of(obs1);
    const conc2 = of(obs2);
    const conc3 = of(obs3);

    /* La funzione concat permette di ritornare
    * l'oggetto di un osservabile dopo
    * che quello precedente è stato completato
    */

    return concat(conc1, conc2, conc3).subscribe(
      (res) => {
        this.result = res;
      }
    );
  }
}
