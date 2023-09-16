import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  item:any=[]
  constructor(private ds:DataService,private r:Router){
    this.ds.getcart().then(res=>res.json()).then(res=>this.item=res)
    console.log(this.item)
   
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
