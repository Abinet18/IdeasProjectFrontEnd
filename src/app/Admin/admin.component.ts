import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'section',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.css']
})


export class AdminComponent implements OnInit {
   public actionClass;
   public action=null;
   blogPosts; //The ideas array
   theUsers; //The users array

  constructor(public data:DbService) { }
//Gets ideas that have not been approved yet
   getUnApprovedIdeas(){
    this.data.getUnApprovedIdeas().subscribe( res => {
      this.blogPosts = res;
      console.log(this.blogPosts);
    });    
  }

  //Gets the unapproved users of the site that are not admins
  getUnApprovedUsers(){
    this.data.getUnApprovedUsers().subscribe( data => {
      this.theUsers = data;
      console.log(this.theUsers);
    });    
  }

  //Runs the following methods on component initailisation
  ngOnInit() {
    this.getUnApprovedIdeas();
    this.getUnApprovedUsers();
  } 

  //Approves an idea
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
  //Deletes an idea 
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

  //Makes a user an administrator
makeAdmin(theUser)
  {
    this.data.makeAdmin(theUser).subscribe( res => {
     console.log("Approved");
     this.actionClass="alert alert-info";
     this.action="Approval";
     this.getUnApprovedIdeas();
    });    
  }

}




