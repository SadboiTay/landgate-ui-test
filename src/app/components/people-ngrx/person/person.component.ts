import { Component, OnInit, Input } from '@angular/core';
import { PersonModel } from 'src/app/models/person-model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: PersonModel;

  constructor() { }

  ngOnInit(): void {
  }

}
