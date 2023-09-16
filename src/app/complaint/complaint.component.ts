import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  data:any=[]
constructor(private fb:FormBuilder,private ds:DataService,private r:Router){
  this.ds.getcomp().then(res=>res.json()).then(res=>this.data=res)
  
}

compl=this.fb.group({
  complaint:['',[Validators.required]],
  place:['',[Validators.required]],
  phone:['',[Validators.required]]
})

submit(){
  let complaint=this.compl.controls.complaint.value
  let place=this.compl.controls.place.value
  let phone=this.compl.controls.phone.value
  this.ds.comp(complaint,place,phone).then(res=>res.json()).then(res=>{
    console.log(res)
    this.r.navigate(['complaint']);
  })

}
}
