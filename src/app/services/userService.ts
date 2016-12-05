import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { rootScope } from './globalService';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

	constructor(private http: Http) {}

	// dichiaro gli URL
	private signupURL = rootScope.serverUrl + '/users';
	private signinURL = rootScope.serverUrl + '/users/login';

	signUp(data): Observable<Object[]> {
		return this.http.post(this.signupURL, data)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	signIn(data): Observable<Object[]> {
		return this.http.post(this.signinURL, data)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}