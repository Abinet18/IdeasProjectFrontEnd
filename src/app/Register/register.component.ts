import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'section',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  
  //Data driven form with validation constraints
  regForm:FormGroup;
  constructor(private fb:FormBuilder,public data:DbService,private router:Router) { 
    this.regForm=fb.group({
      'username':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.minLength(6)],
      'confirmpassword':['',Validators.compose([Validators.minLength(6),this.confirmValidator])]
    });
    //Passwords match custom validation
    this.regForm.controls.password.valueChanges.subscribe(()=>{this.regForm.controls.confirmpassword.updateValueAndValidity();});
  }

  ngOnInit() {
    
   
  }
  
  //Custom Validation method
  confirmValidator(formControl)
  {
   // console.log(formControl._parent)    
    const parent=formControl._parent;
    if(parent)
    {
    console.log(parent.get('password').value==parent.get('confirmpassword').value);
    if(parent.get('password').value==parent.get('confirmpassword').value) return null;    
    }
    return {v:1}
  }
  
  //Function run when the form is submitted
  onSubmit()
  {
    //Create the object to pass as the body/entity in the post request
    let user={username:this.regForm.controls.username.value,email:this.regForm.controls.email.value,password:this.regForm.controls.password.value};
    
    //Used the addUser service provided by the data service class to make a post
    this.data.addUser(user).subscribe(
      (res)=>{
        console.log(res);
        //Route to the welcome page on success
        this.data.username=user.username;
        this.router.navigate(['/welcome']);
      }
      );
       
  }

}
