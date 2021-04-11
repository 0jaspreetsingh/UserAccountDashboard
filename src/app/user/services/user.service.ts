import { User } from './../Interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	/**
   * User api url of user service
   */
	userApiUrl: string = 'http://localhost:5000/api/user';

	constructor(private readonly http: HttpClient) {}

	/**
  * Gets all users
  * @returns all users
  */
	getAllUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.userApiUrl);
	}

	/**
   * Gets user
   * @param id
   * @returns user
   */
	getUser(id: number): Observable<User> {
		return this.http.get(`${this.userApiUrl}/${id}`);
	}

	/**
  * Saves user
  * @param user
  * @returns user
  */
	saveUser(user: User): Observable<User> {
		return this.http.post(`${this.userApiUrl}`, user);
	}

	/**
   * Updates user
   * @param user
   * @returns user
   */
	updateUser(user: User): Observable<User> {
		return this.http.put(`${this.userApiUrl}`, user);
	}

	/**
  * Deletes user
  * @param id
  * @returns user
  */
	deleteUser(id: number): Observable<any> {
		return this.http.delete(`${this.userApiUrl}/${id}`);
	}
}
