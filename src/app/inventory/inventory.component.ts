import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {
  stock:any=[]
constructor(private fb:FormBuilder,private r:Router,private ds:DataService){
  this.ds.getstock().then(res=>res.json().then(res=>this.stock=res))

}
editsStock(e:any){
  this.r.navigate(['stockedit',e.target.id])
}


inventory=this.fb.group({
  product:['',[Validators.required]],
  stock_quantity:['',[Validators.required]],
  sold_quantity:['',[Validators.required]]
})

submited(){
  let product=this.inventory.controls.product.value
  let stock_quantity=this.inventory.controls.stock_quantity.value
  let sold_quantity=this.inventory.controls.sold_quantity.value
  this.ds.inv(product,stock_quantity,sold_quantity).then(res=>res.json()).then(res=>{
    console.log(res)
    this.r.navigate(['admin']);
  })

}
}

