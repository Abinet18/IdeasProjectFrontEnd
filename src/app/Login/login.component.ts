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
//@Abinet 
//create a form group for login 
  loginForm:FormGroup;
  message:string;  //to hold message of success or failure on login
  previousUrl:string;  // to hold the url that redirected to login if there is one
  constructor(private fb:FormBuilder,public data:DbService,private router:Router) { 
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
    //construct the user object and send to to the backend for checking the credentials
    let user={username:this.loginForm.controls.username.value,password:this.loginForm.controls.password.value};
    this.data.login(user).subscribe(
      (res)=>{
        if(res==null) //No response from backend
        {
          console.log("Http Error occured");
        }
        else if(res.success)  //Login successful
        {
        console.log(res);
        this.data.storeUserData(res.token,res.user);  //store user token
        let url=this.previousUrl?this.previousUrl:'/'; //check if user was redirected
        this.data.message="Welcome " + res.user.username; //set the message for the home page
        this.data.messageClass="alert alert-info";        
        console.log(url);                                  
        this.router.navigate([url]);//navigate to either home page or the redirected url if it exists
        }      
       else
      {
        this.message="Invalid username or password"; //set message on response with failed login status
      }
    });
  }
}
