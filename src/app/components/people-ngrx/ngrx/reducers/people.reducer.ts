import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import { PersonModel } from '../../../../models/person-model';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
export interface State {
  isLoading: boolean,
  people: PersonModel[]
}

export const initialState: State = {
  isLoading: false,
  people: [],
};


export const reducer = createReducer(
  initialState,

  on(PeopleActions.loadPeoples, (state) => ({ 
    ...state, 
    people: [],
    isLoading: true,
  })),

  on(PeopleActions.loadedPeople, (state, { people }) => ({
    ...state,
    people: people,
    isLoading: false,
  }))
);

