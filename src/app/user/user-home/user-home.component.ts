import { User } from './../Interfaces/User';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'uad-user-home',
	templateUrl: './user-home.component.html',
	styleUrls: [ './user-home.component.css' ]
})
export class UserHomeComponent implements OnInit {
	/**
  * Users  of user home component
  */
	users?: User[];

	constructor(private readonly userService: UserService) {}

	ngOnInit(): void {
		this.userService.getAllUsers().subscribe((res) => {
			this.users = res;
		});
	}
}
