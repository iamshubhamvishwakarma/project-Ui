import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "UI-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  @Input()
  isSideNavOpen;
  @Output()
  sideNavCloseClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  closeSideNave() {
    this.sideNavCloseClick.emit("close");
  }
}
