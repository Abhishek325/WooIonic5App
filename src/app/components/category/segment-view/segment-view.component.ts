import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Category } from 'src/app/services/woocommerce/category/interface';

@Component({
  selector: 'app-category-segment-view',
  templateUrl: './segment-view.component.html',
  styleUrls: ['./segment-view.component.scss'],
})
export class SegmentViewComponent implements OnInit {

  categoryListForSegment:Category[];
  categoryId: number;
  @Output() changed = new EventEmitter<boolean>();

  constructor(private contextService:ContextService) { }

  onChange(id: number, name: string) {
    this.categoryId = id;
    this.contextService.entityIdSelected = id;
    this.contextService.entityNameSelected = name;
    this.changed.emit();
  }

  ngOnInit() {
    this.categoryId = this.contextService.entityIdSelected;
    this.categoryListForSegment = this.contextService.categories;
  }

}
