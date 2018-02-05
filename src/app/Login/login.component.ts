import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'section',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  message:string;
  previousUrl:string;
  constructor(private fb:FormBuilder,private data:DbService,private router:Router) { 
    this.loginForm=fb.group({
      'username':['',Validators.required],
      'password':['',Validators.minLength(6)],
    });
  }

  ngOnInit() { 
     // On page load, check if user was redirected to login
     if (this.data.redirectUrl) {
      this.message = 'You must be logged in to view that page.'; // Set message
      this.previousUrl = this.data.redirectUrl; // Set the previous URL user was redirected from
      this.data.redirectUrl = undefined; // Erase previous URL
     }
  }   
   

  onLoginSubmit()
  {
    let user={username:this.loginForm.controls.username.value,password:this.loginForm.controls.password.value};
    this.data.login(user).subscribe(
      (res)=>{
        if(res.success)
        {
        console.log(res);
        this.data.storeUserData(res.token,res.user);
        let url=this.previousUrl?this.previousUrl:'/';
        this.data.message="Welcome " + res.user.username;
        this.data.messageClass="alert alert-info";
        console.log(url);
        this.router.navigate([url]);
        }      
       else
      {
        this.message="Invalid username or password";
      }
    });
  }
}
