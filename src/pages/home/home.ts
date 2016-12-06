import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InitPage } from '../init/init';

import { UserService } from '../../app/services/userService';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, private userService: UserService) {

	}

	logoutAction() {
		this.userService.logout().then((resp) => {
			if(resp == 'ok') {
				this.navCtrl.push(InitPage);
			}
		});
	}

}
