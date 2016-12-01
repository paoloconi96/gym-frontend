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

	ngOnInit() {

	}
	
	submitData() {
		this.userService.signUp(this.signupData).subscribe(puttana => this.navCtrl.push(TabsPage));
	}

}
