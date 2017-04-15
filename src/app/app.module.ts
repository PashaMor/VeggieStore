import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VegtableList} from "../pages/vegtable-list/vegtable-list";
import {ShoppingBag} from "../pages/shopping-bag/shopping-bag";
import {VegtableDetails} from "../pages/vegtable-details/vegtable-details";

@NgModule({
  declarations: [
    MyApp,
    VegtableList,
    ShoppingBag,
    VegtableDetails,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VegtableList,
    ShoppingBag,
    VegtableDetails,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
