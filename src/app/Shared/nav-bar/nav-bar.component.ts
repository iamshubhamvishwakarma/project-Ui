import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "UI-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  @Input()
  isSolidNavbar;

  isSideNavOpen = false;
  constructor() {}

  ngOnInit() {}
  toggleSideNav($event) {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
