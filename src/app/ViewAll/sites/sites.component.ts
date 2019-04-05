import { Component, OnInit } from "@angular/core";
import { FetchService } from "src/app/Service/fetch.service";
import { query } from "@angular/Animations";

@Component({
  selector: "UI-sites",
  templateUrl: "./sites.component.html",
  styleUrls: ["./sites.component.scss"]
})
export class SitesComponent implements OnInit {
  sites=[];
  data;
  query = "";
  constructor(private fetchService: FetchService) {}

  ngOnInit() {
    this.fetchService.getSites().subscribe(sitesData => {
      console.log(sitesData);
      this.data = sitesData;
      this.sites = this.data;
    });
  }
  searching() {
     
  }
}
