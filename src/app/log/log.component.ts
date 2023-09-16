import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  constructor(private fb:FormBuilder,private r:Router,private ds:DataService,private ar:ActivatedRoute){
  }

  logForm=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  
  })
  submitted(){
    let user=this.logForm.controls.username.value
    let pswd=this.logForm.controls.password.value
    

    this.ds.signin(user,pswd).then(res=>res.json()).then(res=>{
     
      if(res['token'] && user == "vijeshp"){
        console.log(res)
        localStorage.setItem('token',res['token'])
        alert("Login Successfull!")
        this.r.navigate(['admin'])
      }
      else if(res['token']){
        localStorage.setItem('token',res['token'])
        alert("Login Successfull!")
      this.r.navigate(['home'])
      }
      else{
        alert('Login Failed ! Invalid Username & Password!!')
      }
      
    
    }).catch(res=>alert("Login Failed"))
    // if(this.logForm.valid){
    //   console.log(this.logForm)
    //   console.log(this.logForm.value)
    //   console.log(this.logForm.controls.username.value)
    //   console.log(this.logForm.valid)
    // }
    // else{
    //   alert('form is invalid')
    //   console.log(this.logForm.get('username')?.valid)
    //   console.log(this.logForm.get('password')?.valid)

    // }
  }
}
