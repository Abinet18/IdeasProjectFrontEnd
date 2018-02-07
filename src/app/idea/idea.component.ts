import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  //The idea form initialised and created. It contains validation
  ideaForm:FormGroup;
  constructor(private fb:FormBuilder, public data:DbService,private router:Router) { 
    this.ideaForm=fb.group({
      'title':['',Validators.required],
      'type':['',Validators.required],
      'idea':['',Validators.minLength(100)]
    });
  }

  ngOnInit() {
    /*this.ideaForm.statusChanges.subscribe(
      data=>{console.log(data);}
    );*/
  }

  //Method invoked when the form is submitted
  onSubmit()
  {
    //Created the idea entity to post
    let theIdea={title:this.ideaForm.controls.title.value, 
                type:this.ideaForm.controls.type.value,
                idea:this.ideaForm.controls.idea.value,
                owner:this.data.username
              };
    console.log(theIdea);
    
    //Called on the addIdea service inside the data service to be used to make the post
    this.data.addIdea(theIdea).subscribe(
      (res)=>{
        //Navigates to the thanks route on success
         console.log(res);
         this.router.navigate(['/thanks']);
      });
      
    //console.log(theIdea);
  }

}
