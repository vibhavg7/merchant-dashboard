import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ProductCatelogService } from '../../shared/product-catelog.service';

@Component({
  selector: 'app-product-catelog',
  templateUrl: './product-catelog.component.html',
  styleUrls: ['./product-catelog.component.css']
})
export class ProductCatelogComponent implements OnInit {

  storeId : any;
  filterBy: any = "";
  searchCriteriaForm: FormGroup;
  currentPage: number = 1;
  pageSize: number = 20;
  store_products_info: any = [];
  store_products_count: any;
  errorMessage: any = "";
  constructor(private _productCatelogService:ProductCatelogService,private formBuilder: FormBuilder) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
   }
 
  ngOnInit() {
    this.storeId = +JSON.parse(localStorage.getItem('merchant'))['store_id'];
    this._productCatelogService.fetchStoreProducts(this.storeId, this.currentPage, this.pageSize, "").subscribe((data) => {
      this.store_products_info = data['store_products_info'];
      this.store_products_count = data['store_products_count'][0]['store_products_count'];
      console.log(this.store_products_info);
      console.log(this.store_products_count);
    })
    // // this.onChanges();
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(1000),
      switchMap(query => (this.filterBy = query, this._productCatelogService.fetchStoreProducts(this.storeId, this.currentPage, this.pageSize, query)))
    )
      .subscribe(res => { this.store_products_count = res['store_products_count'][0]['store_products_count']; console.log(res); this.store_products_info = res['store_products_info']; })
  }

  currentPageFn(page) {
    // console.log(page);
    this._productCatelogService.fetchStoreProducts(this.storeId, page, this.pageSize, this.filterBy)
      .subscribe((data) => {
        // this.store_products_count = data['store_products_count'][0]['store_products_count'];
        this.store_products_info = data['store_products_info'];
        // console.log(this.stores);
      })
  }

}
