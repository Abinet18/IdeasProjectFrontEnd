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
<<<<<<< HEAD
  home;
  searchForm;
  
  
=======
>>>>>>> 6f509812f0efdeb7d0d8e1608a54721969a73f25

  constructor(private fb:FormBuilder, private data:DbService,private router:Router) {
   this.home=true;
   this.searchForm=this.fb.group({
     'type':['',Validators.required],
     'title':['',Validators.required]
   })
    
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
  
  search()
  {
      let type=this.searchForm.controls.type.value;
      let title=this.searchForm.controls.title.value;
      this.data.searchForIdeas(type,title).subscribe(
        (res)=>{
          this.blogPosts=res;
        }
      )
  }
  showMore(idea)
  {
    this.data.selectedIdea=idea;
    console.log(idea);
    this.data.storeIdeaId(idea._id);
    this.router.navigate(['/selectedIdea']);
  }

 

}
