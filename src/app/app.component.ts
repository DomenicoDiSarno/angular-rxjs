import {Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseRepositoryService} from './services/firebase-repository.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  demoRepository1: any[];
  form: FormGroup;

  private personSub: Subscription;

  constructor(protected firebaseRepositoryService: FirebaseRepositoryService) {}

   ngOnInit(): void {
    this.initForm();
    this.getDemoRepository1();
    this.personSub = this.firebaseRepositoryService.personUpdateListener().subscribe(
      (persons) => {
        this.demoRepository1 = persons;
      }
    );
   }

   ngOnDestroy(): void {
    // IMPORTANTE: Ricordarsi sempre di fare l'unsubscribe per il listener in modo da
    // svuotare la memoria temporanea
    this.personSub.unsubscribe();
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

   getDemoRepository1() {
    this.firebaseRepositoryService.getDemoRepository1();
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
        this.getDemoRepository1();
      }
    );
    this.form.reset();
   }

   editPerson(id) {
    console.log(id);
   }
}
