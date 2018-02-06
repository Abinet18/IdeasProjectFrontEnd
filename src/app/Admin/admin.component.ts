import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'section',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.css']
})


export class AdminComponent implements OnInit {
   private actionClass;
   private action=null;
   blogPosts;

  constructor(private data:DbService) { }

   getUnApprovedIdeas(){
    this.data.getUnApprovedIdeas().subscribe( res => {
      this.blogPosts = res;
      console.log(this.blogPosts);
    });    
  }

  ngOnInit() {
    this.getUnApprovedIdeas();
  } 

  Approve(ideaId)
  {
    console.log(ideaId);
    this.data.approve(ideaId).subscribe( res => {
     console.log("Approved");
     this.actionClass="alert alert-info";
     this.action="Approval";
     this.getUnApprovedIdeas();
    });    
  }
  Delete(ideaId)
  {
    console.log(ideaId);
    this.data.delete(ideaId).subscribe( data => {
    console.log("Deleted");
    this.actionClass="alert alert-warning";
    this.action="Deletion";
    this.getUnApprovedIdeas();
  });

}
}




