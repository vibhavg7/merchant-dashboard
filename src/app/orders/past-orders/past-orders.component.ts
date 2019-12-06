import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {

  constructor(private _orderService:OrderService) { }
  storeId:any;
  pageTitle: any = "Merchant Orders";
  store_order_total_count: any;
  storeOrders: any = [];
  errorMessage :any = "";
  currentPage: number = 1;
  pageSize: number = 5;
  filterBy:any = "";
  ngOnInit() {
    this.storeId = +JSON.parse(localStorage.getItem('merchant'))['store_id'];
    this._orderService.fetchAllStoreOrders(this.storeId, this.currentPage, this.pageSize, "").subscribe((data) => {     
      this.store_order_total_count = data['store_order_count'][0]['store_orders_count'];
      this.storeOrders = data['store_orders_info'];
      console.log(this.storeOrders);
      console.log(this.store_order_total_count);
    })
  }

  currentPageFn(page) {
    // console.log(this.storeId);
    this._orderService.fetchAllStoreOrders(this.storeId, page, this.pageSize, this.filterBy)
      .subscribe((data) => {  
        console.log(data['store_orders_info']);      
        this.storeOrders = data['store_orders_info'];
      })
  }

}
