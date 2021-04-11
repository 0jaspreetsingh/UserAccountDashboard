import { UserService } from './../services/user.service';
import { User } from './../Interfaces/User';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'uad-user-view',
	templateUrl: './user-view.component.html',
	styleUrls: [ './user-view.component.css' ]
})
export class UserViewComponent implements OnInit {
	/**
   * Input  of user view component
   */
	@Input() user?: User;

	/**
   * Edit  of user view component
   */
	edit = false;

	/**
  * Output  of user view component
  */
	@Output() refreshList = new EventEmitter<boolean>();

	constructor(private readonly UserService: UserService) {}

	ngOnInit(): void {}

	refresh(refresh?: boolean): void {
		this.edit = false;
		if (refresh) {
			this.refreshList.emit(true);
		}
	}

 /**
  * Deletes user view component
  */
 delete(): void {
		if (this.user && this.user.id) {
			this.UserService.deleteUser(this.user.id).subscribe(
				(res) => {
          console.log('delete successful');
          this.refreshList.emit(true);
				},
				(error) => {
					console.log('Eror occoured');
				}
			);
		}
	}
}
