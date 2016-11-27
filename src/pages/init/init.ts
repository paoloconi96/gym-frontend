import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { TranslatorService } from '../../app/services/translator';


@Component({
	selector: 'page-init',
	templateUrl: 'init.html'
})
export class InitPage {

	constructor(public navCtrl: NavController, public t: TranslatorService) {

	}

	ngOnInit() {

	}
	
	submitData() {
		this.navCtrl.push(TabsPage);
	}

}
