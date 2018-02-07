import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourideas',
  templateUrl: '../homepage/homepage.component.html',
  styleUrls: ['../homepage/homepage.component.css']
})
export class YourideasComponent implements OnInit {

  blogPosts;
  home;
  constructor(public data:DbService,private router:Router) { }


 ngOnInit() {
   this.getYourIdeas();
   this.home=false;
 }
 showMore(idea)
 {
   this.data.selectedIdea=idea;
   console.log(idea);
   this.data.storeIdeaId(idea._id);
   this.router.navigate(['/selectedIdea']);
 } 
getYourIdeas()
{
       this.data.getYourIdeas().subscribe(
        (res)=>{
          this.blogPosts=res;
        }
      );
   }
}