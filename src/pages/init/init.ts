import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FirstPlanPage } from '../firstplan/firstplan';

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
				if(val['current_plan_missing']) {
					this.navCtrl.push(FirstPlanPage);
				} else {
					this.navCtrl.push(TabsPage);
				}
			};
		})
	}
	
	submitData(formId) {
		// signup 
		if(formId == 1) {
			
			this.userService.signUp(this.signupData)
				.subscribe(user => {
					switch(user.status) {
						case 'ok': 
							this.navCtrl.push(FirstPlanPage);
							break;
						case 'ko':
							this.responseError = user.message;
							break;
						default:
							this.responseError = 'Si è verificato un errore, riprova più tardi';
					}
				}, err => {
					return { status: 'ko', message: err };
				});

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
							this.responseError = 'Si è verificato un errore, riprova più tardi';
					}
				}, err => {});
		
		}
	}

	// modifica il form visualizzato nella vista
	chooseForm(formId) {
		this.currentBlock = formId;
	}

}














