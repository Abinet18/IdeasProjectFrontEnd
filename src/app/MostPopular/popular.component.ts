import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'section',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class MostPopularComponent implements OnInit {

  blogPosts;

  constructor(private data:DbService) { }

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
  } 

}
