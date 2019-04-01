import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Util } from "../util/util";
import { Item } from "../Models/item";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  apiUrl;
  constructor(private httpClient: HttpClient) {}

  getItems(params?) {
    if (!params) {
      this.apiUrl = "http://www.mocky.io/v2/5c6a96cd330000ab187f4bd6";
    } else {
      this.apiUrl = params;
    }
    let req = this.httpClient.get(this.apiUrl);
    return req;
  }

  getSites() {
    let req = this.httpClient.get(
      "http://www.mocky.io/v2/5c9cb6d433000011003f202c"
    );
    return req;
  }

  getTempData() {
    let tempItems = [];

    for (let i = 0; i < 15; i++) {
      let temp = new Item();
      temp.id = Math.random() * 6 + 1;
      temp.image =
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg";
      temp.name = " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)";
      temp.source = "FLIPKART";
      temp.price = 151.101;
      temp.offer = "-15%";
      temp.url = "https://www.asus.com/in/Phone/Zenfone-Max-Pro-M2-ZB630KL/";
      tempItems.push(temp);
    }
    return tempItems;
  }
}
