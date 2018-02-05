import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'section',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.css']
})


export class AdminComponent implements OnInit {

   blogPosts;

  constructor(private data:DbService) { }

   getUnApprovedIdeas(){
    this.data.getUnApprovedIdeas().subscribe( data => {
      this.blogPosts = data;
      console.log(this.blogPosts);
    });    
  }

  ngOnInit() {
    this.getUnApprovedIdeas();
  } 

  Approve(ideaId)
  {
    console.log(ideaId);
    this.data.approve(ideaId).subscribe( data => {
     console.log("Approved");
    });    
  }
  Delete(ideaId)
  {
    console.log(ideaId);
    this.data.delete(ideaId).subscribe( data => {
    console.log("Deleted");
  });

}
}




