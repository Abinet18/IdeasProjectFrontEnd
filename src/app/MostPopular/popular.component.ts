import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'section',
  templateUrl: '../homepage/homepage.component.html',
  styleUrls: ['../homepage/homepage.component.css']
})
export class MostPopularComponent implements OnInit {

  blogPosts;
  home;
  constructor(public data:DbService,private router:Router) { }

   getPopularIdeas()
  {
      this.data.getPopularIdeas().subscribe(
        (res)=>{
          this.blogPosts=res;
        }
      );
   }
  ngOnInit() {
    this.getPopularIdeas();
    this.home=false;
  }
  showMore(idea)
  {
    this.data.selectedIdea=idea;
    console.log(idea);
    this.data.storeIdeaId(idea._id);
    this.router.navigate(['/selectedIdea']);
  } 

}
