import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {ManageCustomerComponent} from './manage-customer/manage-customer.component';
import {ManageItemComponent} from './manage-item/manage-item.component';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {NotfoundComponent} from './notfound/notfound.component';
// import { CommonModule } from '@angular/common';

const appRouters: Routes = [
  {
    path: 'dashbord',
    component: DashbordComponent
  },
  {
    path: 'manage-customer',
    component: ManageCustomerComponent
  },
  {
    path: 'manage-item',
    component: ManageItemComponent
  },
  {
    path: 'place-order',
    component: PlaceOrderComponent
  },
  {
    path: 'view-order',
    component: ViewOrderComponent
  },
  {
    path: '',
    redirectTo: '/dashbord',
    pathMatch: 'full' // full/prefix
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
