import { Component } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminvservice',
  templateUrl: './adminvservice.component.html',
  styleUrls: ['./adminvservice.component.css']
})
export class AdminvserviceComponent {
  data:any=[]
constructor(private fb:FormBuilder,private ds:DataService,private r:Router){
  this.ds.getallservice().then(res=>res.json()).then(res=>this.data=res)
  
}
}
