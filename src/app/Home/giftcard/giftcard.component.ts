import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "UI-giftcard",
  templateUrl: "./giftcard.component.html",
  styleUrls: ["./giftcard.component.scss"]
})
export class GiftcardComponent implements OnInit {
  @Input()
  giftcard;
  constructor() {}

  ngOnInit() {}
}
