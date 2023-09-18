import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  item:any=[]
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder){
    this.ds.getorders().then(res=>res.json()).then(res=>this.item=res)
    console.log(this.item)
   
  }


}
