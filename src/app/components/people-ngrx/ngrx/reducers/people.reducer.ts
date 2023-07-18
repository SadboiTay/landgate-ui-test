import { Action, createReducer, on } from '@ngrx/store';
import * as PeopleActions from '../actions/people.actions';
import { PersonModel } from '../../../../models/person-model';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
export interface State {
  isLoading: boolean,
  people: PersonModel[],
  selectedPersonId: number,
}

export const initialState: State = {
  isLoading: false,
  people: [],
  selectedPersonId: null,
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
    selectedPersonId: null,
  })),

  on(PeopleActions.selectPerson, (state, { id }) => ({
    ...state,
    selectedPersonId: id,
  })),

  on(PeopleActions.deselectPerson, (state, { id }) => ({
    ...state,
    selectedPersonId: null,
  }))
);

