import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../app/service/Data-Service";
import {Vegetable} from "../module/Vegetable-model";

/**
 * Generated class for the ShoppingBag page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopping-bag',
  templateUrl: 'shopping-bag.html',
})
export class ShoppingBag {
  shoopingBag:Vegetable[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private ds:DataService) {
  }

  ionViewDidLoad() {
  }
  ionViewDidEnter(){
    this.shoopingBag = this.ds.getShoppingBag();
  }
}
