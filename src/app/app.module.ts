import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { InitPage } from '../pages/init/init';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { TranslatorService } from './services/translator';

@NgModule({
  declarations: [
    MyApp,
    InitPage,
    HomePage,
    TabsPage
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
    TabsPage
  ],
  providers: [ TranslatorService ]
})
export class AppModule {}
