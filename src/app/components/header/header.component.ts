import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  path: string;
  homePath: string = '/home';
  peoplePath: string = '/people-ngrx';

  constructor(private location: Location) { 
    this.location.onUrlChange((val) => {
      this.path = val;
    })
  }


  ngOnInit() {
  }

}
