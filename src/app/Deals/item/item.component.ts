import { Component, OnInit, Input } from "@angular/core";
import { Data } from "src/app/Models/item";

@Component({
  selector: "UI-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input()
  item: Data;
  constructor() {}

  ngOnInit() {}
  openItem(item: Data) {
    console.log(item);
    window.open(item.productUrl, "_blank");
  }
}
