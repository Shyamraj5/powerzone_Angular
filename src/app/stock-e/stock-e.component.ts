import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stock-e',
  templateUrl: './stock-e.component.html',
  styleUrls: ['./stock-e.component.css']
})
export class StockEComponent {
sid:any;
stock:any={};
constructor(private ar:ActivatedRoute,private ds:DataService,private fb:FormBuilder,private r:Router)
{
  this.ar.params.subscribe(res=>this.sid=res['id'])
  console.log(this.sid)
  this.ds.getSpecinv(this.sid).then(res=>res.json()).then(res=>{
    console.log(res)
    this.stockform=this.fb.group({
      product:[`${res.product}`,Validators.required],
      stock_quantity:[`${res.stock_quantity}`,Validators.required],
      sold_quantity:[`${res.sold_quantity}`,Validators.required],
      // description:[`${res.product_description}`,Validators.required],
    })
    
    this.getstock(res)
  })
  }
  getstock(data:any){
    this.stock=data
  }
  stockform=this.fb.group({
    product:['',Validators.required],
    stock_quantity:['',Validators.required],
    sold_quantity:['',Validators.required],
   
  })
  submitteds(){
    console.log(this.stockform.value)
    let product:any=this.stockform.controls.product.value
    let stock_quantity :any=this.stockform.controls.stock_quantity.value
    let sold_quantity:any=this.stockform.controls.sold_quantity.value
   

    let stockd=new FormData()
    stockd.append('product ',product)
    stockd.append('stock_quantity',stock_quantity)
    stockd.append('sold_quantity',sold_quantity)
    // formd.append('product_description',desc)
    
    this.ds.updatestock(this.sid,stockd).then(res=>res.json).then(res=>{
      alert("Update")
      this.r.navigate(['inventory'])
    })

  }

}

