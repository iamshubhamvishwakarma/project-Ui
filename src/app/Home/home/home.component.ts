import { Component, OnInit } from "@angular/core";
import { FetchService } from "../../Service/fetch.service";
@Component({
  selector: "UI-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  items: any;
  sites: any;
  giftcards: any;
  placeholderItem = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.fetchService.getItems().subscribe(data => {
      console.log(data);
      this.items = data;
    });
    this.fetchService.getSites().subscribe(sitesData => {
      console.log(sitesData);
      this.sites = sitesData;
    });
    this.giftcards = this.fetchService.getGiftcards();
  }
}
