import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { InitPage } from '../pages/init/init';


@Component({
	template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
	rootPage = InitPage;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}
}
