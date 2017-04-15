import {Component, Input} from '@angular/core';
import {Vegetable} from "../../pages/module/Vegetable-model";
import {DataService} from "../../app/service/Data-Service";

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

  constructor(private ds:DataService) {

  }

  addToBag(){
    this.ds.addVegToBag(this.vegg);
    console.log('Veggie Added - Click Work')
  }
}
