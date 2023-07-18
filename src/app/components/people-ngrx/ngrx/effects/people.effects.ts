import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, map } from 'rxjs/operators';
import {EMPTY, from, of} from 'rxjs';

import * as PeopleActions from '../actions/people.actions';
import {loadedPeople} from '../actions/people.actions';
import { PeopleService } from 'src/app/services/people.service';


@Injectable()
export class PeopleEffects {


  loadPeoples$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PeopleActions.loadPeoples),
      // TODO Implement a Load People Action that gets the data from the service.
      switchMap(() => from(this.peopleService.getPeople()).pipe(
        map((people) => loadedPeople({ people: people }))
      ))
    );
  });


  constructor(private actions$: Actions, private peopleService: PeopleService,) {}

}
