import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatelogComponent } from './product-catelog/product-catelog.component';
import { AddProductComponent } from './product-catelog/add-product.component';

const routes: Routes = [
    {
        path:'',
        component: ProductCatelogComponent
    },
    {
        path: 'merchantproducts/:productId/edit',
        component: AddProductComponent
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
export class CatelogRoutingModule {

}