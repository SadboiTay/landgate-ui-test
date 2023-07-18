import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeople from '../reducers/people.reducer';

export const selectPeopleState = createFeatureSelector<fromPeople.State>(
  fromPeople.peopleFeatureKey
);

// TODO: need to add a selector for people.
export const selectPeople = createSelector(
  selectPeopleState,
  (state: fromPeople.State) => state.people
)

// Added an additional selector to showcase loading state behavior
export const selectPeopleIsLoading = createSelector(
  selectPeopleState,
  (state: fromPeople.State) => state.isLoading
)

// Add selector for selected person's id
export const selectedPersonId = createSelector(
  selectPeopleState,
  (state: fromPeople.State) => state.selectedPersonId
)