import { Component, OnInit, Input } from "@angular/core";
import { Item } from "src/app/Models/item";

@Component({
  selector: "UI-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input()
  item: Item;
  constructor() {}

  ngOnInit() {}
}
