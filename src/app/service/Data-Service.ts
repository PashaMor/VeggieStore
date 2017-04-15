import {Injectable} from "@angular/core";
import {Vegetable} from "../../pages/module/Vegetable-model";

@Injectable()
export class DataService{

 private vegList:Vegetable[] = [];
 private shoppingBag:Vegetable[] = [];

  constructor(){
    this.vegList = [
      new Vegetable('tomato', 5.60, 'red', './assets/img/tomato.jpg'),
      new Vegetable('Eggplant', 5.90, 'purple', './assets/img/Eggplant.jpg'),
      new Vegetable('cucumber', 2.22, 'green', './assets/img/Cucumber.jpg'),
      new Vegetable('Carrot', 1.2, 'orange', './assets/img/Carrot.jpg')
    ];
  }
  addVegToBag(veg:Vegetable){
    this.shoppingBag.push(veg);
  }
  getVegetableList():Vegetable[]{
    return this.vegList
  }
  getShoppingBag():Vegetable[]{
    return this.shoppingBag;
  }

}
