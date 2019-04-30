import {Component, OnInit} from '@angular/core';
import {combineLatest, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {
  url1: string;
  url2: string;
  url3: string;
  result: any[];
  code = `
    combineLatestExample(link1, link2, link3) {
      const obs1 = this.httpClient.get(link1);
      const obs2 = this.httpClient.get(link2);
      const obs3 = this.httpClient.get(link3);

      const comb1 = of(obs1);
      const comb2 = of(obs2);
      const comb3 = of(obs3);

      return combineLatest(comb1, comb2, comb3).subscribe(
        ([res1, res2, res3]) => {
          this.result.push([res1, res2, res3]);
        }
      );
    }`;


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  combineLatestExample(link1, link2, link3) {
    const obs1 = this.httpClient.get(link1);
    const obs2 = this.httpClient.get(link2);
    const obs3 = this.httpClient.get(link3);

    const comb1 = of(obs1);
    const comb2 = of(obs2);
    const comb3 = of(obs3);

    /* La funzione combineLatest permette di ritornare
    * gli oggetti ottenuti da più osservabili in un unico array
    * Ogni osservabile viene interrogato solo dopo che
    * quello precedente è stato completato
    */

    return combineLatest(comb1, comb2, comb3).subscribe(
      ([res1, res2, res3]) => {
        this.result = [res1, res2, res3];
      }
    );
  }
}
