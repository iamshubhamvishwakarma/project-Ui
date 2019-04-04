import { Component, OnInit } from "@angular/core";
import { FetchService } from "src/app/Service/fetch.service";

@Component({
  selector: "UI-sites",
  templateUrl: "./sites.component.html",
  styleUrls: ["./sites.component.scss"]
})
export class SitesComponent implements OnInit {
  sites;
  query = "";
  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.fetchService.getSites().subscribe(sitesData => {
      console.log(sitesData);
      this.sites = sitesData;
    });
  }
  searching() {
    
  }
}
