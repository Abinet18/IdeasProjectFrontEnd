import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//import {HttpClient, Response, RequestOptions, Headers} from '@angular/common/http';

@Component({
  selector: 'section',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  
  regForm:FormGroup;
  constructor(private fb:FormBuilder,private data:DbService) { 
    this.regForm=fb.group({
      'username':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.minLength(6)],
      'confirmpassword':['',Validators.required]
    });
  }

  ngOnInit() {
    
   
  }
  onSubmit()
  {
    let user={username:this.regForm.controls.username.value,email:this.regForm.controls.email.value,password:this.regForm.controls.password.value};
    
    this.data.addUser(user).subscribe(
      (data)=>{console.log(data);});
    console.log(user);
  }

}
