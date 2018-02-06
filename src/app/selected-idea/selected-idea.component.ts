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
  feedback;
  feedback2;
  img;
  
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

    this.feedback = 0;
    this.feedback2 = 0;
  }

  ngOnInit() {
    this.stars=[1,2,3,4,5];
    this.idea=this.data.selectedIdea; 

    this.data.getImg().subscribe( data => {
      this.img = data;
      console.log(this.img);
    });

    if(!this.idea)
    {
    this.reload();
    }   
    }

  onSubmit(theId){
    let theComment={comment: this.commentForm.controls.comment.value,
      ideaId: theId,
      ownerUsername:this.data.getUser() };

    //Check if this idea array already has the comment
    let commentsArray = this.idea.thoughts;
    for (let commentIndex of commentsArray) {
        if((commentIndex.owner==this.data.getUser())&&(commentIndex.text==this.commentForm.controls.comment.value)){
          console.log('Already here');
          this.feedback = 1;
          return false;
        } 
    }

    if(this.commentForm.controls.comment.value==''){
      console.log("Empty");
      this.feedback2 = 1;
      return false;
    }

    this.data.addComment(theComment).subscribe(
      (data)=>{//console.log(data);
        this.feedback = 0;
        this.feedback2 = 0;
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

 deleteComment(theId, commmentOwner, theText, theDate)
 {
  let theCommentToDelete={ideaId: theId, owner: commmentOwner,
   thoughtText: theText, commentDate: theDate};
  
  this.data.deleteComment(theCommentToDelete).subscribe(
    (data)=>{/*console.log(data);*/
      this.reload();
    });

}
 getYourRating()
 {
   let ratings=this.idea.ratings;
   for(let rating of ratings)
   {
     if(rating.rater==this.data.getUser())
     {
       return rating.rating;
     }
   }
   return null;
 }
}
