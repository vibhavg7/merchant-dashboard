import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { LiveOrdersComponent } from './live-orders/live-orders.component';
import { OrderDashboardComponent } from './order-dashboard.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PastOrdersComponent, LiveOrdersComponent, OrderDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrdersModule { }
