import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AddExercisePage } from '../addexercise/addexercise';

import { TranslatorService } from '../../app/services/translator';
import { UserService } from '../../app/services/userService';


@Component({
	selector: 'page-firstplan',
	templateUrl: 'firstplan.html'
})
export class FirstPlanPage {

	constructor(public navCtrl: NavController, public t: TranslatorService, private userService: UserService) {

	}

	private signupData = {}
	private signinData = {}
	private currentBlock = 0;
	private responseError = '';

	ngOnInit() {

	}

	editWeightHeight() {
		this.navCtrl.push(AddExercisePage);
	}

	newExercise() {
		this.navCtrl.push(AddExercisePage);
	}

}














