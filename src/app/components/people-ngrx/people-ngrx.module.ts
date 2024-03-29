import {NgModule} from '@angular/core';
import {PeopleNgrxComponent} from './people-ngrx.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromPeople from './ngrx/reducers/people.reducer';
import {PeopleEffects} from './ngrx/effects/people.effects';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PeopleNgrxComponent, PersonComponent],
  exports: [PeopleNgrxComponent],
  imports: [
    CommonModule, 
    StoreModule.forFeature(fromPeople.peopleFeatureKey, fromPeople.reducer), EffectsModule.forFeature([PeopleEffects]),
    FormsModule,
  ]
})
export class PeopleNgrxModule {
}
