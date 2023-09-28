import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  prod:any=[]
  
  constructor(private ds:DataService,private r:Router){
    this.ds.getProduct().then(res=>res.json()).then(res=>this.prod=res)
    console.log(this.prod)
    
    
   
  }
  deletepro(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deleteProduct(id).then(res=>res.json()).then(res=>{
      alert("Product Deleted")
      
      this.r.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.r.navigate(['admin']);
      });
    }).catch(res=>console.log(res.error))
  }


editPage(e:any){
    this.r.navigate(['edit',e.target.id])
  }


  logout(){
    localStorage.clear()
    this.r.navigate([''])
  }
}
