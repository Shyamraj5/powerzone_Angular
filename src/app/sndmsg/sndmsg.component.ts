import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-sndmsg',
  templateUrl: './sndmsg.component.html',
  styleUrls: ['./sndmsg.component.css']
})
export class SndmsgComponent {
  cid: any;
  ser: any = {}
  constructor(private ar: ActivatedRoute, private fb: FormBuilder, private r: Router, private ds: DataService) {
    this.ar.params.subscribe(res => this.cid = res['id'])
    console.log(this.cid)
    this.ds.getspec_ser(this.cid).then(res => res.json()).then(res => {
      console.log(this.cid)
      console.log(res)
      this.getpro(res)
    })


  }



  getpro(data: any) {
    this.ser = data
  }



  res=this.fb.group({

    response:['', [Validators.required]],

  })




  submitted() {
    // console.log(this.res.value)
    let service = this.cid
    
    let response: any = this.res.controls.response.value

    console.log(response)

    this.ds.sndmsg(service,response).then(res=>res.json()).then(res => {
      console.log(res)
      
      this.r.navigate(['admin'])
    })

  }

}
