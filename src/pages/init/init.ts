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

	ngOnInit() {

	}
	
	submitData(formId) {
		// signup 
		if(formId == 1) {
			
			this.userService.signUp(this.signupData).subscribe(user => {
				console.log(user);
				// this.navCtrl.push(TabsPage);
			}, err => {
				console.log(err)
			});

		// signin
		} else {
			
			this.userService.signIn(this.signinData).subscribe(user => {
				console.log(user);
				// this.navCtrl.push(TabsPage)
			}, err => {
				console.log(err)
			});
		
		}
	}

	chooseForm(formId) {
		this.currentBlock = formId;
	}

}














