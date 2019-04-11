import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  search(userQuery) {
    if (!userQuery || userQuery === "") {
      return;
    }
    return this.httpClient.get("http://localhost:3000/api/search?query=" + userQuery);
  }
}
