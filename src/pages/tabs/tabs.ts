import { Component } from '@angular/core';

import {VegtableList} from "../vegtable-list/vegtable-list";
import {ShoppingBag} from "../shopping-bag/shopping-bag";
import {DataService} from "../../app/service/Data-Service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root:any = VegtableList;
  tab2Root:any = ShoppingBag;
  info;
  constructor(private ds:DataService) {
    this.info = this.ds.numberOfItemsInBag
  }

}
