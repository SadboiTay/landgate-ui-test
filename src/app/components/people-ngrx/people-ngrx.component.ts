import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPeople, selectPeopleIsLoading } from './ngrx/selectors/people.selectors';
import { Observable } from 'rxjs';
import { PersonModel } from 'src/app/models/person-model';
import { loadPeoples } from './ngrx/actions/people.actions';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {
  people$: Observable<PersonModel[]> = this.store.select(selectPeople);
  isLoading$: Observable<boolean> = this.store.select(selectPeopleIsLoading);

  // TODO: Include the Store and get the data from the NgrxStore
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadPeoples());
  }
}
