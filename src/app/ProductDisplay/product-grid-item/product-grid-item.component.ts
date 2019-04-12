import { Component, OnInit, Input } from "@angular/core";
import { Item } from "src/app/Models/item";

@Component({
  selector: "UI-product-grid-item",
  templateUrl: "./product-grid-item.component.html",
  styleUrls: ["./product-grid-item.component.scss"]
})
export class ProductGridItemComponent implements OnInit {
  @Input() item;
  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }
  openLink(item) {
    console.log(item.name, item.productUrl); // call service to registar
    window.open(item.productUrl, "_blank"); //need to check how to navigate properly this is temprory
  }
}
