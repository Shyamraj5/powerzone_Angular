import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { CartComponent } from './cart/cart.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ServiceComponent } from './service/service.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StockEComponent } from './stock-e/stock-e.component';
import { ViewcomplComponent } from './viewcompl/viewcompl.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { AdminvserviceComponent } from './adminvservice/adminvservice.component';
import { AllorderComponent } from './allorder/allorder.component';




@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    HomeComponent,
    LogComponent,
    CartComponent,
    ComplaintComponent,
    ServiceComponent,
    AdminhomeComponent,
    AddComponent,
    EditComponent,
    InventoryComponent,
    StockEComponent,
    ViewcomplComponent,
    OrdersComponent,
    OrdernowComponent,
    AdminvserviceComponent,
    AllorderComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
