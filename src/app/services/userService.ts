import { Component, Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

	constructor(private http: Http) {}

	// dichiaro gli URL
	private signupURL = 'http://localhost:3000/users';

	signUp(data): Observable<Object[]> {
		return this.http.post(this.signupURL, data)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}