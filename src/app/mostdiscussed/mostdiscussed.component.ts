import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostdiscussed',
  templateUrl: '../homepage/homepage.component.html',
  styleUrls: ['../homepage/homepage.component.css']
})
export class MostdiscussedComponent implements OnInit {
  blogPosts;
  constructor(public data:DbService,private router:Router) { }


 ngOnInit() {
   this.getMostDiscussedIdeas();
 }
 showMore(idea)
 {
   this.data.selectedIdea=idea;
   console.log(idea);
   this.data.storeIdeaId(idea._id);
   this.router.navigate(['/selectedIdea']);
 } 
getMostDiscussedIdeas()
{
       this.data.getMostDiscussedIdeas().subscribe(
        (res)=>{
          this.blogPosts=res;
        }
      );
   }
}


