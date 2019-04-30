import {Component, OnInit} from '@angular/core';
import {of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {
  error = throwError('Ehi! This is an Error =D');
  code = `
    error = throwError('Ehi! This is an Error =D');

    this.error.pipe(catchError(
      (error) => {
        return of(\`You have a new message: \${error}\`);
      }
    )).subscribe(
      (message) => {
        this.message = message;
      }
    );
  `;
  message: any;

  constructor() {}

  ngOnInit(): void {
    this.error.pipe(catchError(
      (error) => {
        return of(`You have a new message: ${error}`);
      }
    )).subscribe(
      (message) => {
        this.message = message;
      }
    );
  }
}
