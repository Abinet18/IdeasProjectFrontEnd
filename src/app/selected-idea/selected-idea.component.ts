import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { HttpClient } from '@angular/common/http';

import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.css']
})
export class SelectedIdeaComponent implements OnInit {

  ratingForm;
  commentForm;
  idea;
  stars;
  constructor(private data:DbService,fb:FormBuilder) { 

    this.ratingForm=fb.group(
      {
        rating:['',Validators.required]
      }
    );
    this.commentForm=fb.group(
      {
        comment:['',Validators.required]
      }
    );

  }

  ngOnInit() {
    this.stars=[1,2,3,4,5];
    this.idea=this.data.selectedIdea; 
    this.reload();   
     }
  onSubmit(theId){
    let theComment={comment: this.commentForm.controls.comment.value,
      ideaId: theId,
      ownerUsername:this.data.getUser() };
    
    this.data.addComment(theComment).subscribe(
      (data)=>{/*console.log(data);*/
       this.reload();
  });

  }
  onRating(theId)
  {
    let rating=
    {
      rater:this.data.getUser(),
      rating:this.ratingForm.controls.rating.value,
      dateofr:new Date()
    };
    console.log(theId);
    console.log(rating);
    this.data.addRating(theId,rating).subscribe(
      (res)=>{
        console.log(res);
        this.reload();
      }
    )
  }
 reload()
 {
   let id=this.data.getIdeaId();
   console.log(id);
   this.data.getIdea(id).subscribe(
   (res)=>{
     console.log(res);
     this.idea=res;   
   });
 }
}
