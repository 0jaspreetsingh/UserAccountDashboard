import { UserService } from './../services/user.service';
import { User } from './../Interfaces/User';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
	selector: 'uad-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: [ './user-edit.component.css' ]
})
export class UserEditComponent implements OnInit {
	/**
  * Input  of user edit component
  */
	@Input() user?: User;

	/**
  * Output  of user edit component
  */
	@Output() close = new EventEmitter<boolean>();

	/**
  * Form  of user edit component
  */
	form?: FormGroup;

	constructor(private readonly fb: FormBuilder, private readonly UserService: UserService) {}

	ngOnInit(): void {
		this.createForm();
	}

	createForm(): void {
		this.form = this.fb.group({
			name: [
				this.user && this.user.name ? this.user.name : '',
				[ Validators.required, Validators.minLength(3), Validators.maxLength(150) ]
			],
			email: [
				this.user && this.user.email ? this.user.email : '',
				[ Validators.required, Validators.email, Validators.maxLength(200) ]
			],
			department: [
				this.user && this.user.department ? this.user.department : '',
				[ Validators.required, Validators.maxLength(50) ]
			],
			address: [ this.user && this.user.address ? this.user.address : '', [ Validators.maxLength(200) ] ],
			phone: [
				this.user && this.user.phone ? this.user.phone : '',
				[ Validators.required, Validators.minLength(9), Validators.maxLength(12) ]
			],
			country: [
				this.user && this.user.country ? this.user.country : '',
				[ Validators.required, Validators.maxLength(56) ]
			]
		});
	}

	save(): void {
		if (this.user) {
			//update user
			const userDto = this.form.value;
			userDto.id = this.user.id;
			this.UserService.updateUser(userDto).subscribe(
				(res) => {
          console.log('User updated');
          this.close.emit(true);
				},
				(error) => {
					console.log('Error occoured');
				}
			);
		} else {
			this.UserService.saveUser(this.form.value).subscribe(
				(res) => {
          console.log('User Saved');
          this.close.emit(true);
				},
				(error) => {
					console.log('Error occoured');
				}
			);
		}
	}
}
