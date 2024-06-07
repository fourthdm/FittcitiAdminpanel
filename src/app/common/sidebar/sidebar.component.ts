import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _rest: RestService, private _state: StateService) { }

  ngOnInit(): void {

  }

  view() {
    
  }

}