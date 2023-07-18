import { Injectable } from '@angular/core';
import {delay} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {PersonModel} from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  private mockPeopleList: PersonModel[] = [
    {id: 1, firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer'},
    {id: 2, firstName: 'Jane', lastName: 'Doe', age: 22, jobTitle: 'Signer'},
    {id: 3, firstName: 'Bob', lastName: 'Barker', age: 80, jobTitle: 'TV Host'},
    {id: 4, firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer'},
  ].map((person) => new PersonModel(person));


  async getPeople(): Promise<PersonModel[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    await of(true).pipe(delay(2000)).toPromise();
    return of(this.mockPeopleList).toPromise();
  }
}
