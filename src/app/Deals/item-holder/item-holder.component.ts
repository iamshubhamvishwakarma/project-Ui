import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { counter } from "@fortawesome/fontawesome-svg-core";
import { Item } from "src/app/Models/item";

@Component({
  selector: "UI-item-holder",
  templateUrl: "./item-holder.component.html",
  styleUrls: ["./item-holder.component.scss"]
})
export class ItemHolderComponent implements OnInit {
  @ViewChild("horidiv") horiDiv: ElementRef;

  @Input()
  items;
  placeholderItem=[{},{},{},{},{},{},{},{},{},{},{},{},{}];
  constructor() {}

  ngOnInit() {
    // if (!this.items) {
    //   for (let i = 0; i < 10; i++) {
    //     let temp = new Item();
    //     this.placeholderItem.push(temp);
    //   }
    //   console.log("no item");
    // }
  }

  scrollRight() {
    this.horiDiv.nativeElement.scrollTo({
      left: this.horiDiv.nativeElement.scrollLeft + 500,
      behavior: "smooth"
    });
  }
  scrollLeft() {
    this.horiDiv.nativeElement.scrollTo({
      left: this.horiDiv.nativeElement.scrollLeft - 500,
      behavior: "smooth"
    });
  }
}
