import {Vegetable} from "./Vegetable-model";
export class VegtableSummary {

  constructor(public vegtable:Vegetable, public amount:number){

  }

  increaseAmount(){
    this.amount ++;
  };

}
