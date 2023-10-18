import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html', 
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  data:any=[]
constructor(private fb:FormBuilder,private ds:DataService,private r:Router){
  this.ds.getser().then(res=>res.json()).then(res=>this.data=res)
  
  
}

servi=this.fb.group({
  service:['',[Validators.required]],
  place:['',[Validators.required]],
  phone:['',[Validators.required]]
})

submitt(){
  let service=this.servi.controls.service.value
  let place=this.servi.controls.place.value
  let phone=this.servi.controls.phone.value
  this.ds.ser(service,place,phone).then(res=>res.json()).then(res=>{
    console.log(res)
    this.r.navigate(['services']);
  })



}
}
