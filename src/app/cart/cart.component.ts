import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  item:any=[]
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder){
    this.ds.getcart().then(res=>res.json()).then(res=>this.item=res)
    console.log(this.item)
   
  }
  order=this.fb.group({
    quantity:['',[Validators.required]],
    address:['',[Validators.required]],
    phone:['',[Validators.required]],
    landmark:['',[Validators.required]],
    category:['',[Validators.required]],
    payment:['',[Validators.required]],
  })

  orders(e:any){
  let quantity=this.order.controls.quantity.value
  let address=this.order.controls.address.value
  let phone=this.order.controls.phone.value
  let landmark=this.order.controls.landmark.value
  let payment=this.order.controls.payment.value
    this.ds.order(e.target.id,quantity,address,phone,landmark,payment).then(res=>res.json()).then(res=>{
      console.log(res)

    })
  }

  deletecar(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deletecart(id).then(res=>res.json()).then(res=>{
      alert("Product Deleted")
      
      this.r.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.r.navigate(['Cart']);
      });
    }).catch(res=>console.log(res.error))
  }
  
  
}
