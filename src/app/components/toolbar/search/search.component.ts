import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Product } from 'src/app/services/woocommerce/product/interface';

@Component({
  selector: 'app-product-search-toolbar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchMatchedItems: Product[] = [];
  @ViewChild('searchbar') search: any;
  @Output() close = new EventEmitter<boolean>();

  constructor(private contextService:ContextService) { }

  public getItems($event) {
    const val = $event.target.value;
    if (!val) {
      this.searchMatchedItems = [];
      return;
    }
    if (val.length >= 3) {
      this.searchMatchedItems = this.contextService.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  public onCancelSearch() {
    this.searchMatchedItems = [];
    this.close.emit();
  }

  ngOnInit() {
    setTimeout(() => {
      this.search.setFocus();
    }, 500);
  }

}
