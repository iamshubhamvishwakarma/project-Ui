import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { SearchService } from "./search.service";
@Injectable()
export class SearchResolver implements Resolve<any> {
  constructor(private searchService: SearchService,private routeData: ActivatedRoute) {}

  resolve() {
      console.log(this.routeData.snapshot);
    // return this.searchService.search(routeData.paramMap.get("query"));
  }
}
