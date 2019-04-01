import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "UI-offer-by-site",
  templateUrl: "./offer-by-site.component.html",
  styleUrls: ["./offer-by-site.component.scss"]
})
export class OfferBySiteComponent implements OnInit {
  @Input()
  site;
  constructor() {}

  ngOnInit() {}
}
