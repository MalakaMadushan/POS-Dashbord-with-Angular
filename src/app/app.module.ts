import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageItemComponent } from './manage-item/manage-item.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRouterModule} from './app.router.module';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ManageCustomerComponent,
    ManageItemComponent,
    PlaceOrderComponent,
    ViewOrderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
