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
  {path:'stockedit/:id',component:StockEComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
