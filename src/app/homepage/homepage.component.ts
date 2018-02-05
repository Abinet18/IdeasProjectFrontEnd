import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> dfbff196764da2a45fcc6dda7d9c62705420c9da

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {
  blogPosts;

  constructor(private data:DbService) { }

  getAllIdeas(){
    this.data.getAllIdeas().subscribe( data => {
      this.blogPosts = data;
      console.log(this.blogPosts);
    });
    
  }

  ngOnInit() {
    this.getAllIdeas();
  }

 

 

}
