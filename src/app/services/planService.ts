import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { rootScope } from './globalService';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlanService {

	constructor(private http: Http, private storage:Storage) {}

	// dichiaro gli URL
	private createExerciseURL = rootScope.serverUrl + '/plan/exercise/create';

	createExercise(data): any {
		return this.http.post(this.createExerciseURL, data)
			.map((res:Response) => {
				let plan = res.json();

				if(user['id']) {
					this.setToken(user['token']);
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
		return this.storage.get('user-token');
	}
	
	// salvo il token nella memoria locale per il postriavvio dell'app
	setToken(token) {
		this.storage.set('user-token', token);
	}

}





