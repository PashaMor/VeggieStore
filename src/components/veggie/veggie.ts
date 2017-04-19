import {Component, Input} from '@angular/core';
import {Vegetable} from "../../pages/module/Vegetable-model";
import {DataService} from "../../app/service/Data-Service";
import {NavController} from "ionic-angular";
import {VegDetail} from "../../pages/veg-detail/veg-detail";


/**
 * Generated class for the Veggie component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'veggie',
  templateUrl: 'veggie.html'
})
export class Veggie {

  @Input()
  vegg:Vegetable;
  constructor(private ds:DataService, private navCtrl:NavController) {

  }
  DetailClick(){
  this.navCtrl.push(VegDetail, {vegPushed: this.vegg})
  }
  addToBag(){
    this.ds.addVegToBag(this.vegg);
    console.log('Veggie Added - Click Work')
  }
}
