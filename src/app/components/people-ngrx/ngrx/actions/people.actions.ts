import { createAction, props } from '@ngrx/store';
import {PersonModel} from '../../../../models/person-model';

// This is a request
export const loadPeoples = createAction(
  '[People] Load Peoples'
);

// This is a load success
export const loadedPeople = createAction(
  '[People] Loaded',
  props<{ people: PersonModel[] }>()
)

// An action for selecting an individual person
export const selectPerson = createAction(
  '[People] Select Person',
  props<{ id: number }>()
)

// An action for de-selecting an individual person (cancelling the edit)
export const deselectPerson = createAction(
  '[People] Deselect Person',
)

export const updatePerson = createAction(
  '[People] Update Person',
  props<{ person: PersonModel }>()
)
