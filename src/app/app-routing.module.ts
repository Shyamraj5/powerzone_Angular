import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './reg/reg.component';
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
import { SndmsgComponent } from './sndmsg/sndmsg.component';
import { MsgsComponent } from './msgs/msgs.component';
import { HiiComponent } from './hii/hii.component';
const routes: Routes = [
  {path:'reg',component:RegComponent},
  {path:'home',component:HomeComponent},
  {path:'Cart',component:CartComponent},
  {path:'complaint',component:ComplaintComponent},
  {path:'',component:LogComponent},
  {path:'services',component:ServiceComponent},
  {path:'admin',component:AdminhomeComponent},
  {path:'add',component:AddComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'stockedit/:id',component:StockEComponent},
  {path:'viewcomp',component:ViewcomplComponent},
  {path:'order',component:OrdersComponent},
  {path:'ordernow/:id',component:OrdernowComponent},
  {path:'allser',component:AdminvserviceComponent},
  {path:'allorder',component:AllorderComponent},
  {path:'sndmsg/:id',component:SndmsgComponent},
  {path:'msgs',component:MsgsComponent},
  {path:'hi',component:HiiComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
