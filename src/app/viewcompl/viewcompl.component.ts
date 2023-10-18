import { Component } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-viewcompl',
  templateUrl: './viewcompl.component.html',
  styleUrls: ['./viewcompl.component.css']
})
export class ViewcomplComponent {
  data:any=[]
  cid:any;
constructor(private fb:FormBuilder,private ds:DataService,private r:Router,private ar:ActivatedRoute){
  this.ds.getallcomp ().then(res=>res.json()).then(res=>this.data=res)

}
}
