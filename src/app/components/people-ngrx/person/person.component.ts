import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { PersonModel } from 'src/app/models/person-model';
import { deselectPerson, selectPerson, updatePerson } from '../ngrx/actions/people.actions';
import { selectedPersonId } from '../ngrx/selectors/people.selectors';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy {
  @Input() person: PersonModel;
  isSelected: boolean;
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
  selectedPersonId$ = this.store.select(selectedPersonId);
  selectedPersonSubscription: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.setFormValues();

    this.selectedPersonSubscription = this.selectedPersonId$.subscribe(id => {
      if (id === this.person.id ) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
        this.setFormValues();
      }
    })
  }

  ngOnDestroy(): void {
    this.selectedPersonSubscription.unsubscribe();
  }

  selectPerson(id: number) {
    this.store.dispatch(selectPerson({ id }))
  }

  deselectPerson() {
    this.store.dispatch(deselectPerson())
  }

  updatePerson(): void {
    const updatePersonDto: PersonModel = {
      id: this.person.id,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      jobTitle: this.jobTitle,
    }

    this.store.dispatch(updatePerson({ person: updatePersonDto }))
  }

  setFormValues(): void {
    this.firstName = this.person.firstName;
    this.lastName = this.person.lastName;
    this.age = this.person.age;
    this.jobTitle = this.person.jobTitle;
  }
}
