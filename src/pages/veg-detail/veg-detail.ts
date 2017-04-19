import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Vegetable} from "../module/Vegetable-model";
import {DataService} from "../../app/service/Data-Service";

/**
 * Generated class for the VegDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-veg-detail',
  templateUrl: 'veg-detail.html',
})
export class VegDetail {
  CurrentVeg:Vegetable;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:DataService) {
   this.CurrentVeg = navParams.get('vegPushed');
  }
  addToBag(){
    this.ds.addVegToBag(this.CurrentVeg);
    console.log('Veggie Added - Click Work')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VegDetail');
  }

}
