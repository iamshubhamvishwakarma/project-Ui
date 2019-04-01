import { Component, OnInit } from "@angular/core";

@Component({
  selector: "UI-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  categories = [
    { icon: "fas fa-mobile-alt", title: "Mobiles" },
    { icon: "fas fa-tshirt", title: "Fashion" }, 
    { icon: "fas fa-book", title: "Books" },
    { icon: "fas fa-shoe-prints", title: "Footwear" },
    { icon: "fas fa-mobile-alt", title: "Mobiles" },
    { icon: "fas fa-tshirt", title: "Fashion" }, 
    { icon: "fas fa-book", title: "Books" },
    { icon: "fas fa-shoe-prints", title: "Footwear" },
    { icon: "fas fa-mobile-alt", title: "Mobiles" },
    { icon: "fas fa-tshirt", title: "Fashion" }, 
    { icon: "fas fa-book", title: "Books" },
    { icon: "fas fa-shoe-prints", title: "Footwear" },
    { icon: "fas fa-mobile-alt", title: "Mobiles" },
    { icon: "fas fa-tshirt", title: "Fashion" }, 
    { icon: "fas fa-book", title: "Books" },
    { icon: "fas fa-shoe-prints", title: "Footwear" },
    
  ];
  constructor() {}

  ngOnInit() {}
}
