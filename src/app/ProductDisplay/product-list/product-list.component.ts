import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/Service/fetch.service';

@Component({
  selector: 'UI-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items = [];
  constructor(private fatchService: FetchService) {}

  ngOnInit() {
    this.items = this.fatchService.getTempData();
  }
}
