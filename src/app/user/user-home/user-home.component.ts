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

	/**
  * Add new of user home component
  */
	addNew: boolean = false;

	constructor(private readonly userService: UserService) {}

	ngOnInit(): void {
		this.getUsers();
	}

	/**
  * Gets users
  */
	getUsers(): void {
		this.userService.getAllUsers().subscribe((res) => {
			this.users = res;
		});
	}

 /**
  * Refreshs user home component
  * @param [refresh]
  */
 refresh(refresh?: boolean): void {
		this.addNew = false;
		if (refresh) {
			this.getUsers();
		}
	}
}
