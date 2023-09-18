
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  pro:any=[]
  constructor(private ds:DataService,private r:Router){
    this.ds.getProduct().then(res=>res.json()).then(res=>this.pro=res)
    console.log(this.pro)
  }
  
 cart(e:any){
  this.ds.addtocart(e.target.id).then(res=>res.json()).then(res=>{
    console.log(res)
    this.r.navigate(['Cart'])

  })


 }

 logout(){
  localStorage.clear()
  this.r.navigate([''])
}


  
}
