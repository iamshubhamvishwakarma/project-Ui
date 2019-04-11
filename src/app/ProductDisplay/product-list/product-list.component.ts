import { Component, OnInit, Input } from "@angular/core";
import { FetchService } from "src/app/Service/fetch.service";

@Component({
  selector: "UI-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  @Input()
  items;
  constructor(private fatchService: FetchService) {}

  ngOnInit() {
    console.log(this.items);
    //this.items = this.fatchService.getTempData();
  }
}
