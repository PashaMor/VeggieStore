import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from "../../app/service/Data-Service";
import {Vegetable} from "../module/Vegetable-model";

/**
 * Generated class for the VegtableList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vegtable-list',
  templateUrl: 'vegtable-list.html',
})
export class VegtableList {

  vegList:Vegetable[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private ds:DataService) {
  }

  ionViewDidLoad() {
    this.vegList = this.ds.getVegetableList();
  }

}
