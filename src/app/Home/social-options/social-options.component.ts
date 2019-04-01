import { Component, OnInit } from "@angular/core";

@Component({
  selector: "UI-social-options",
  templateUrl: "./social-options.component.html",
  styleUrls: ["./social-options.component.scss"]
})
export class SocialOptionsComponent implements OnInit {
  socialId;
  constructor() {
    this.socialId = new socialId();
  }

  ngOnInit() {}
  join(ids) {
    console.log(ids);
  }
}

class socialId {
  FB: 1; //Facebook
  WA: 2; //WhatsApp
  IG: 3; //Instagram
  TG: 4; //Telegram
}
