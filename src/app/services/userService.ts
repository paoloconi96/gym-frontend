import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { rootScope } from './globalService';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

	constructor(private http: Http, private storage:Storage) {}

	// dichiaro gli URL
	private signupURL = rootScope.serverUrl + '/users';
	private signinURL = rootScope.serverUrl + '/users/login';

	signUp(data): any {
		// esegou il signup
		return this.http.post(this.signupURL, data)
			.map((res:Response) => {
				let user = res.json();

				// se l'utente è stato creato correttamente
				if(user['id']) {
					// salvo il token il localStorage per l'autologin
					this.setToken(user['token']);

					// se non ha un current plan allora deve ancora crearlo, scrivo in localStorage
					if(!user['id_current_plan']) {
						this.setCurrentPlanMissing(1);
					}

					return { status: 'ok' };
				} else if(user['status'] == 'ko' && user['code'] == 1) {
					return { status: 'ko', message: 'Utente già registrato' };
				}
			})
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	signIn(data): any {
		return this.http.post(this.signinURL, data)
			.map((res:Response) => {
				res = res.json();
				if(res['id']) {
					this.setToken(res['token']);
					return { status: 'ok' };
				}
			})
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	doAutoLogin(): Promise<Object> {
		var storage = this.storage;
		return storage.get('user-token').then(function(user_token) {
			if(user_token) {
				return storage.get('current-plan-missing').then(function(current_plan_missing) {
					return Promise.resolve({ 'user_token': user_token, 'current_plan_missing': current_plan_missing });	
				});
			} else {
				return Promise.resolve(user_token);
			}
		});
	}
	
	// salvo il token nella memoria locale per il postriavvio dell'app
	setToken(token) {
		this.storage.set('user-token', token);
	}

	// salvo il token nella memoria locale per il postriavvio dell'app
	setCurrentPlanMissing(isMissing) {
		this.storage.set('current-plan-missing', isMissing);
	}

	logout(): Promise<Object> {
		return this.storage.remove('user-token').then((val) => {
       		return 'ok';
       	});

		// COGLIONE; FAI IL LOGOUT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



		// this.http.post(this.signupURL, data)
		// 	.map((res:Response) => res.json())
		// 	.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
		// 	.subscribe(user => {
		// 		if(user['id']) {
		// 			this.setToken(user['token']);
		// 			return { status: 'ok' };
		// 		} else if(user['status'] == 'ko' && user['code'] == 1) {
		// 			return { status: 'ko', message: 'Utente già registrato' };
		// 		}
		// 	}, err => {
		// 		return { status: 'ko', message: err };
		// 	});
	}

}





