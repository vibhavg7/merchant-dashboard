import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
// import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path:'',
        component: ProfileComponent
    },
    // {
    //     path:'login',
    //     component: LoginComponent
    // }
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
export class UserRoutingModule {

}