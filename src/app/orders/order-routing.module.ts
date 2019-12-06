import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { LiveOrdersComponent } from './live-orders/live-orders.component';

const routes: Routes = [
    {
        path:'pastorders',
        component: PastOrdersComponent
    },
    {
        path: '',
        component: LiveOrdersComponent
    },
]
@NgModule(
    {
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [
            RouterModule
        ]
    }

)
export class OrderRoutingModule
{

}