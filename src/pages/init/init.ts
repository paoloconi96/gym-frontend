import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { TranslatorService } from '../../app/services/translator';
import { UserService } from '../../app/services/userService';


@Component({
	selector: 'page-init',
	templateUrl: 'init.html'
})
export class InitPage {

	constructor(public navCtrl: NavController, public t: TranslatorService, private userService: UserService) {

	}

	private signupData = {}
	private signinData = {}
	private currentBlock = 0;
	private responseError = '';

	ngOnInit() {
		this.userService.doAutoLogin().then((val) => {
			// se il token è definito faccio l'autologin
			if(val) {
				this.navCtrl.push(TabsPage)
			};
		})
	}
	
	submitData(formId) {
		// signup 
		if(formId == 1) {
			
			let response = this.userService.signUp(this.signupData);

			switch(response.status) {
				case 'ok': 
					this.navCtrl.push(TabsPage);
					break;
				case 'ko':
					this.responseError = response.message;
					break;
				default:
					this.responseError = 'Si è verificato un errore, riprova più tardi.';
			}

		// signin
		} else {
			
			this.userService.signIn(this.signinData)
				.subscribe(val => {
					switch(val.status) {
						case 'ok': 
							this.navCtrl.push(TabsPage);
							break;
						case 'ko':
							this.responseError = val.message;
							break;
						default:
							this.responseError = 'Si è verificato un errore, riprova più tardi.';
					}
				}, err => {});
		
		}
	}

	// modifica il form visualizzato nella vista
	chooseForm(formId) {
		this.currentBlock = formId;
	}

}














