import { Component, OnInit, Input } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/Animations";

@Component({
  selector: "UI-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @Input()
  isSolidNavbar;
  constructor() {}
  isFocused = false;
  historys: any = [];
  ngOnInit() {
    for (let index = 0; index < 10; index++) {
      this.historys.push("This is test history");
    }
  }

  hasFocus($event) {
    console.log(this.isFocused);
    this.isFocused = true;
  }
  hadFocus($event) {
    this.isFocused = false;
    console.log(this.isFocused);
  }
}
