import { Component, OnInit } from "@angular/core";

@Component({
  selector: "UI-product-holder",
  templateUrl: "./product-holder.component.html",
  styleUrls: ["./product-holder.component.scss"]
})
export class ProductHolderComponent implements OnInit {
  head_image_url =
    "https://m.media-amazon.com/images/G/31/img19/AMS/banners1/Home-Products._CB454409463_.jpg";
  categories = [
    { title: "Running", quantity: "1" },
    { title: "Gym", quantity: "5" },
    { title: "Soccor", quantity: "23" },
    { title: "Basketball", quantity: "100" },
    { title: "Football", quantity: "12" },
    { title: "Casual", quantity: "14" }
  ];
  filterBrandList = [];
  isDisplayMode = false; // true if grid else list
  constructor() {}

  ngOnInit() {}
  filterList($event, index: number) {
    if ($event.srcElement.checked) {
      this.filterBrandList.push($event.target.value);
    } else {
      this.filterBrandList.splice(
        this.filterBrandList.indexOf($event.target.value),
        1
      );
    }
  }

  displayGrid() {
    if (this.isDisplayMode === false) {
      this.isDisplayMode = true;
      console.log("Grid", this.isDisplayMode);
    }
  }
  displayList() {
    if (this.isDisplayMode === true) {
      console.log("list:", this.isDisplayMode);
      this.isDisplayMode = false;
    }
  }
}
