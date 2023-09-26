import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  pid:any;
  item:any=[]
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder,private ar:ActivatedRoute){
    this.ar.params.subscribe(res=>this.pid=res['id'])
    this.ds.getcart().then(res=>res.json()).then(res=>this.item=res)
    console.log(this.item)
   
  }
  order=this.fb.group({
    quantity:['',[Validators.required]],
    address:['',[Validators.required]],
    phone:['',[Validators.required]],
    
  })

  orders(e:any){
  let product=e.target.id.value
  let quantity=this.order.controls.quantity.value
  let address=this.order.controls.address.value
  let phone=this.order.controls.phone.value
 
    this.ds.order(product,quantity,address,phone).then(res=>res.json()).then(res=>{
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
