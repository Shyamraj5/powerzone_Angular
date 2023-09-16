import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  pid:any;
  file:any;
  pro:any={};
  constructor(private ar:ActivatedRoute,private ds:DataService,private fb:FormBuilder,private r:Router){
    this.ar.params.subscribe(res=>this.pid=res['id'])
    console.log(this.pid)
    this.ds.getSpecificProduct(this.pid).then(res=>res.json()).then(res=>{
      console.log(res)
      this.addForm=this.fb.group({
        product_name:[`${res.product_name}`,Validators.required],
        price:[`${res.price}`,Validators.required],
        category:[`${res.category}`,Validators.required],
        // description:[`${res.product_description}`,Validators.required],
      })
      this.getpro(res)
    })
    }
  getpro(data:any){
    this.pro=data
  }
  addForm=this.fb.group({
    product_name:['',Validators.required],
    price:['',Validators.required],
    category:['',Validators.required],
    // description:['',Validators.required],
  })
  uploadImage(e:any){
    this.file=e.target.files[0]
  }
  submitted(){
    console.log(this.addForm.value)
    let product_name:any=this.addForm.controls.product_name.value
    let price:any=this.addForm.controls.price.value
    let category:any=this.addForm.controls.category.value
    // let desc:any=this.addForm.controls.description.value

    let formd=new FormData()
    formd.append('product_name',product_name)
    formd.append('price',price)
    formd.append('category',category)
    // formd.append('product_description',desc)
    if(this.file){
      formd.append('image',this.file,this.file.name)
    }
    this.ds.updateProduct(this.pid,formd).then(res=>res.json).then(res=>{
      alert("Update")
      this.r.navigate(['admin'])
    })

  }

  
}
