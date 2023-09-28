import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrls: ['./allorder.component.css']
})
export class AllorderComponent {
  allor:any=[]
  constructor(private ds:DataService){
    this.ds.getallorders().then(res=>res.json()).then(res=>this.allor=res)
    
   
  }
}
