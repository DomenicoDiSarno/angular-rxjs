import {Component, OnInit} from '@angular/core';
import {FirebaseRepositoryService} from './services/firebase-repository.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/Rx';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  demoRepository1: any;
  form: FormGroup;

  constructor(protected firebaseRepositoryService: FirebaseRepositoryService) {}

   ngOnInit(): void {
    this.initForm();
    this.getDemoRepository1();
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

   // Il metodo pipe viene messo prima di subscribe e
  // permette di manipolare grazie alla funzione map i
  // dati ottenuti dal server i quali saranno poi
  // visibili alla funzione subscribe
   getDemoRepository1() {
    this.firebaseRepositoryService.getDemoRepository1().pipe(
      map((res: any[]) => {
        return Object.keys(res).map(
          (key) => {
            return {
              id: key,
              firstname: res[key].firstname,
              lastname: res[key].lastname,
              description: res[key].description
            };
          }
        );
      })
    ).subscribe(
      (repo) => {
        this.demoRepository1 = repo;
      }, error1 => {
        console.error('Error on connection', error1);
      }
    );
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
    this.firebaseRepositoryService.saveNewPerson(data).subscribe(
      (res) => {
        console.log(res);
      }
    );
    this.form.reset();
   }

   editPerson(id) {
    console.log(id);
   }
}
