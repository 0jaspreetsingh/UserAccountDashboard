import { User } from './../Interfaces/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uad-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  /**
   * Input  of user view component
   */
  @Input() user?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
