import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-msgs',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.css']
})
export class MsgsComponent {
  msgs:any=[]
  constructor(private ds:DataService,private r:Router){
    this.ds.notifi().then(res=>res.json()).then(res=>this.msgs=res)
    console.log(this.msgs)
    
   
  }

  delres(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deltnotifi(id).then(res=>res.json()).then(res=>{
      alert("Product Deleted")
      
      this.r.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.r.navigate(['msgs']);
      });
    }).catch(res=>console.log(res.error))
  }
}
