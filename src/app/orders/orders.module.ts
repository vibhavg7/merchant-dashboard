import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { LiveOrdersComponent } from './live-orders/live-orders.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderCustomerInfoComponent } from './order-management/order-customer-info.component';
import { OrderDeliveryInfoComponent } from './order-management/order-delivery-info.component';
import { OrderInvoiceInfoComponent } from './order-management/order-invoice-info.component';
import { OrderMerchantInfoComponent } from './order-management/order-merchant-info.component';
import { OrderProductInfoComponent } from './order-management/order-product-info.component';
import { OrderDashboardComponent } from './order-management/order-dashboard.component';



@NgModule({
  declarations: [
    PastOrdersComponent,
    LiveOrdersComponent,
    OrderCustomerInfoComponent,
    OrderDashboardComponent,
    OrderDeliveryInfoComponent,
    OrderInvoiceInfoComponent,
    OrderMerchantInfoComponent,
    OrderProductInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrdersModule { }
