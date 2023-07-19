import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path: string;
  homePath: string = environment.production ? '/landgate-ui-test/home' : '/home';
  peoplePath: string = environment.production ? '/landgate-ui-test/people-ngrx' : '/people-ngrx';

  constructor(private location: Location) { 
    this.location.onUrlChange((val) => {
      this.path = val;
    })
  }


  ngOnInit() {
  }

}
