import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "UI-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.scss"]
})
export class ProductListItemComponent implements OnInit {
  @Input()
  item;
  constructor() {}

  ngOnInit() {}
}
