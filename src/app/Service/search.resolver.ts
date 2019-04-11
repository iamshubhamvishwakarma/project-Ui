import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { SearchService } from "./search.service";
@Injectable()
export class SearchResolver implements Resolve<any> {
  constructor(private searchService: SearchService ) {}

  resolve(routeData: ActivatedRouteSnapshot) {
      console.log( routeData.queryParams);
    return this.searchService.search(routeData.queryParams.query);
  }
}
