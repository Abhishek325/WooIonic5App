import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Category } from 'src/app/services/woocommerce/category/interface';
import { CategoryService } from 'src/app/services/woocommerce/category/service';

@Component({
  selector: 'app-category-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {

  categoryList: Category[] = [];
  showCategoryLoading = true;
  imagesLoadedCount = 0;
  
  constructor(private categoryService: CategoryService, private contextService:ContextService) { }

  setContext(id: number, name: string) {
    this.contextService.entityIdSelected = id;
    this.contextService.entityNameSelected = name;
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categoryList = data;
      this.contextService.categories = this.categoryList;
      this.showCategoryLoading = false;
    }, err => {
      this.showCategoryLoading = false;
    });
  }

}
