import { Component, ViewChild, ElementRef, HostListener } from "@angular/core";

@Component({
  selector: "UI-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ProjectUi";
  terminalResultsDiv;
  isSolidNavbar = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  scrollHandler(event) {
    let height = event.path[1].window.pageYOffset;
    console.log(event.path[1].window.pageXOffset,'--',event.path[1].window.outerHeight )
    if (height > 10) {
      this.isSolidNavbar = true;
    } else {
      this.isSolidNavbar = false;
    }
  }
}
