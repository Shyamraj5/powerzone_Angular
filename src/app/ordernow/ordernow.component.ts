import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.css']
})
export class OrdernowComponent {
  pid:any;
  pro:any={};
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder,private ar:ActivatedRoute){
    this.ar.params.subscribe(res=>this.pid=res['id'])
    this.ds.getSpecificProduct(this.pid).then(res=>res.json()).then(res=>{
      console.log(res)
      // this.orders=this.fb.group({
      //   address:['',Validators.required],
      //   phone:['',Validators.required],
      //   payment:['',Validators.required],
      //   landmark:['',Validators.required],
      //   // description:[`${res.product_description}`,Validators.required],
      // })
      this.getpro(res)
    })
   
  }
  getpro(data:any){
    this.pro=data
  }
orders=this.fb.group({
  quantity:['',[Validators.required]],
  address:['',[Validators.required]],
  phone:['',[Validators.required]],
  landmark:['',[Validators.required]],
  
  payment:['',[Validators.required]],
})

submitted(){
let product=this.pid
let quantity:any=this.orders.controls.quantity.value
let address:any=this.orders.controls.address.value
let phone:any=this.orders.controls.phone.value
let landmark:any=this.orders.controls.landmark.value
let payment:any=this.orders.controls.payment.value




this.ds.order(product,quantity,address,phone,landmark,payment).then(res=>res.json).then(res=>{
  alert("Update")
  this.r.navigate(['order'])
})

}
quantity: number = 0;

incrementQuantity() {
  this.quantity++;
}

decrementQuantity() {
  if (this.quantity > 0) {
    this.quantity--;
  }
}
}