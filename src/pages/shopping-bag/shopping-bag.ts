import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../app/service/Data-Service";
import {VegtableSummary} from "../module/VegtableSummary";

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
    shoppingBag:VegtableSummary[];
    totalPrice:number;
  vegtable;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ds:DataService) {
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter(){
    this.shoppingBag = this.ds.getShoppingBag();
    this.totalPrice = this.shoppingBag.reduce( (p,v) => p += v.vegtable.price  , 0);
  }

  vegRemove(idx){
    this.ds.vegRemove(idx)
    this.refreshTotal()
  }
  refreshTotal(){
    this.totalPrice = this.shoppingBag.reduce( (p,v) => p += v.vegtable.price  , 0);

  }
}
