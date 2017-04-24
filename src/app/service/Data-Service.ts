import {Injectable} from "@angular/core";
import {Vegetable} from "../../pages/module/Vegetable-model";
import {VegtableSummary} from "../../pages/module/VegtableSummary";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Injectable()
export class DataService{

 private vegList:Vegetable[] = [];
 private shoppingBag:VegtableSummary[] = [];

  constructor(){
    this.vegList = [
      new Vegetable('tomato', 5.60, 'red','Im A Tomato', './assets/img/tomato.jpg'),
      new Vegetable('Eggplant', 5.90, 'purple','Im A Eggplant', './assets/img/Eggplant.jpg'),
      new Vegetable('cucumber', 2.22, 'green','Im A Cucumber', './assets/img/Cucumber.jpg'),
      new Vegetable('Carrot', 1.2, 'orange','Im A Carrot', './assets/img/Carrot.jpg')
    ];
  }
  addVegToBag(veg:Vegetable){
    let result:VegtableSummary[] = this.shoppingBag.filter((vegSum) => {vegSum.vegtable===veg});
    if(result.length == 0){
      this.shoppingBag.push(new VegtableSummary(veg, 1));
    }else {
      result[0].increaseAmount()
    }
  }



  getVegetableList():Vegetable[]{
    return this.vegList
  }
  getShoppingBag(){
    return this.shoppingBag;
  }
  vegRemove(idx){
   this.shoppingBag.splice(idx,1);
  }

}
