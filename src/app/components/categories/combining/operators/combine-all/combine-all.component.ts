import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, of} from 'rxjs';

@Component({
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {
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

  combineAllExample(link1, link2, link3) {
    const obs1 = this.httpClient.get(link1);
    const obs2 = this.httpClient.get(link2);
    const obs3 = this.httpClient.get(link3);

    const comb1 = of(obs1);
    const comb2 = of(obs2);
    const comb3 = of(obs3);

    /* La funzione combineAll richiama
    * combineLatest come funzione sugli osservabili
    */

    // TODO: inserire funzione
  }
}
