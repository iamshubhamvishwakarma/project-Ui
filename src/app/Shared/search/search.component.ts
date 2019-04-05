import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "UI-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @Input()
  isSolidNavbar;
  searchString = "";
  constructor(private router: Router) {}
  isFocused = false;
  historys: any = [];
  ngOnInit() {
    for (let index = 0; index < 10; index++) {
      this.historys.push("This is test history");
    }
  }

  hasFocus($event) {
    console.log(this.isFocused);
    this.isFocused = true;
  }
  hadFocus($event) {
    this.isFocused = false;
    console.log(this.searchString);
  }
  search() {
    console.log(this.searchString);
    if (this.searchString.length < 3) {
      return;
    }
    
    this.router.navigate(["/search"], {
      queryParams: { query: encodeURI(this.searchString) }
    });
  }
}
