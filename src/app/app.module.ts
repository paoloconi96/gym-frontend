import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { InitPage } from '../pages/init/init';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FirstPlanPage } from '../pages/firstplan/firstplan';
import { PlanPage } from '../pages/plan/plan';
import { AddExercisePage } from '../pages/addexercise/addexercise';

import { TranslatorService } from './services/translator';
import { UserService } from './services/userService';
import { PlanService } from './services/planService';

@NgModule({
	declarations: [
		MyApp,
		InitPage,
		HomePage,
		TabsPage,
		FirstPlanPage,
		PlanPage,
		AddExercisePage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		FormsModule,
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		InitPage,
		HomePage,
		TabsPage,
		FirstPlanPage,
		PlanPage,
		AddExercisePage
	],
	providers: [
		TranslatorService,
		UserService,
		PlanService,
		Storage
	]
})
export class AppModule {}
