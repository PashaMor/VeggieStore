import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VegtableList} from "../pages/vegtable-list/vegtable-list";
import {ShoppingBag} from "../pages/shopping-bag/shopping-bag";
import {DataService} from "./service/Data-Service";
import {Veggie} from "../components/veggie/veggie";
import {VegDetail} from "../pages/veg-detail/veg-detail";

@NgModule({
  declarations: [
    VegDetail,
    MyApp,
    VegtableList,
    ShoppingBag,
    TabsPage,
    Veggie
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    VegDetail,
    MyApp,
    Veggie,
    VegtableList,
    ShoppingBag,
    TabsPage
  ],
  providers: [
    DataService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
