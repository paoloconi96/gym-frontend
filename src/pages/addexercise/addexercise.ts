import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FirstPlanPage } from '../firstplan/firstplan';

import { TranslatorService } from '../../app/services/translator';
import { UserService } from '../../app/services/userService';


@Component({
	selector: 'page-addexercise',
	templateUrl: 'addexercise.html'
})
export class AddExercisePage {

	private timeBased = {}
	private repetitionBased = {}
	private currentBlock = 1;
	private responseError = '';

	constructor(public navCtrl: NavController, public t: TranslatorService, private userService: UserService) {

	}

	ngOnInit() {

	}

	backToList() {
		this.navCtrl.push(FirstPlanPage);
	}

	submitData(formId) {
		let sendData;
		if(formId == 1) { // timeBased 
			sendData = this.timeBased;
		} else { // repetitionBased
			sendData = this.repetitionBased;
		}
			
		this.userService.signUp(sendData)
			.subscribe(user => {
				switch(user.status) {
					case 'ok': 
						// this.navCtrl.push(timeBased);
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
	}

	// modifica il form visualizzato nella vista
	chooseForm(formId) {
		this.currentBlock = formId;
	}

}














