import { Component, OnInit } from "@angular/core";
import { faSms, faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "UI-bot",
  templateUrl: "./bot.component.html",
  styleUrls: ["./bot.component.scss"]
})
export class BotComponent implements OnInit {
  faMessage = faSms;
  isOpen = true;
  constructor() {}

  toggleWindow(event) {
    console.log(event);
    if (this.isOpen) {
      this.faMessage = faClosedCaptioning;
    } else {
      this.faMessage = faSms;
    }
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  ngOnInit() {}
}
