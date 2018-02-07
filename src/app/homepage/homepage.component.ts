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
//@Abinet
export class HomepageComponent implements OnInit {
  blogPosts;//Array to hold list of ideas
  home:Boolean;     //variable to identify this page as home (since this component shared html with other components)
  searchForm:FormGroup; //Form to search for ideas
  
  

  constructor(private fb:FormBuilder, public data:DbService,private router:Router) {
   this.home=true;
   this.searchForm=this.fb.group({
     'type':[''],
     'title':[''],
     'owner':['']
   })
    
   }

  //get the approved ideas to display on page
  getApprovedIdeas(){
    this.data.getApprovedIdeas().subscribe( data => {
      this.blogPosts = data;
      console.log(this.blogPosts);

    });
    
  }

  ngOnInit() {
   //call method on initialization
    this.getApprovedIdeas();
  }
 //collect the input and send request to search for ideas
  search()
  {
    //set inputs to 0 if undefined(null)
      let type=this.searchForm.controls.type.value;
      type=type?type:0;
      let title=this.searchForm.controls.title.value;
      title=title?title:0;
      let owner=this.searchForm.controls.owner.value;
      owner=owner?owner:0;
      this.data.searchForIdeas(type,title,owner).subscribe(
        (res)=>{
          this.blogPosts=res;
        }
      )
  }
  //show details of a selected idea, set a shared variable in the service to hold the selected idea
  //and redirect to the selectedIdea component
  showMore(idea)
  {
    this.data.selectedIdea=idea;
    console.log(idea);
    this.data.storeIdeaId(idea._id);
    this.router.navigate(['/selectedIdea']);
  }
}
