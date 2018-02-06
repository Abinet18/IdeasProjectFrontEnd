import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { HttpClient } from '@angular/common/http';

import { FormGroup,FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.css']
})

export class HomepageComponent implements OnInit {
  blogPosts;
  
  

  constructor(private fb:FormBuilder, private data:DbService,private router:Router) {
    
   }

  getAllIdeas(){
    this.data.getAllIdeas().subscribe( data => {
      this.blogPosts = data;
      console.log(this.blogPosts);
    });
    
  }
  getApprovedIdeas(){
    this.data.getApprovedIdeas().subscribe( data => {
      this.blogPosts = data;
      console.log(this.blogPosts);

    });
    
  }

  ngOnInit() {
   
    this.getApprovedIdeas();
  }
  
  // onSubmit(theId){
  //   let theComment={comment: this.commentForm.controls.comment.value,
  //     ideaId: theId,
  //     ownerUsername:this.data.getUser() };
    
  //   this.data.addComment(theComment).subscribe(
  //     (data)=>{/*console.log(data);*/});

  // }
  showMore(idea)
  {
    this.data.selectedIdea=idea;
    this.data.storeIdeaId(idea._id);
    this.router.navigate(['/selectedIdea']);
  }

  deleteComment(theId, indexNo, theText){
    let theCommentToDelete={ideaId: theId,
      thoughtIndexNo: indexNo, thoughtText: theText};
    
    this.data.deleteComment(theCommentToDelete).subscribe(
      (data)=>{/*console.log(data);*/});

  }

}
