import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class DbService {
  
  //@Abinet
  //Data service class is a shared service that provides rest calls for the components and holds temporary values for 
  //communication between components
  token;  //stores user token returned from backend
  username; //stores username
  message:string; //holds message to be passed between pages
  messageClass:string; //the css class for the message type
  private base_url:string="https://floating-taiga-43125.herokuapp.com/"; //the url for the rest api(express backend)
  redirectUrl:string; //holds the url that redirected to login
  selectedIdea; //temporary store for idea selected for detailed view
  constructor(private http:HttpClient) {}
  
  //@Brian
  //send comment object to the rest api to be saved
  addComment(comment):Observable<any>
  {
   return this.http.post(this.base_url+'idea/comment',comment);
  }
  //@Abinet
  //send rating object to the rest api to be saved
  addRating(ideaId,rating):Observable<any>
  {
   return this.http.post(this.base_url+'idea/rating/'+ideaId,rating);
  }
  //send a new user object to the rest api to be saved
  addUser(user):Observable<any>
  {
   return this.http.post(this.base_url+'users/add',user);
  }
  //store username, token, and admin role in the local storage for reference and resending when required
  storeUserData(token,user)
  {
    localStorage.setItem('token',token);
    localStorage.setItem('username',user.username);
    localStorage.setItem('admin',user.admin);
    this.token=token;
    this.username=user.username;
  }
  //store idea id in the local storage to retrieve the updated idea
  storeIdeaId(ideaId)
  {
    localStorage.setItem('idea_id',ideaId);
  }
  //get the stored idea id
  getIdeaId()
  {
    return localStorage.getItem("idea_id");
  }
  //send login credentials to the rest api
  login(user):Observable<any> {
    return this.http.post( this.base_url+'users/login', user);
  }

  // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }
  //clean up local storage and temp variables during logout
  logout() {
    this.token = null; // Set token to null
    this.username = null; // Set user to null
    this.message="You have logged out";
    this.messageClass="alert alert-warning";
    localStorage.clear(); // Clear local storage
  }
  //get the locally stored username
  getUser()
  {
    this.username=localStorage.getItem('username');
    return this.username;
  }
  //get the locally stored token
  getToken()
  {
    return localStorage.getItem('token');
  }
  //check if user is admin from local storage 
  isAdmin()
  {
    return localStorage.getItem('admin')>"0"?true:false;
  }
  //send idea object  to be added to the rest api
  addIdea(theIdea):Observable<any>
  {
   return this.http.post(this.base_url+'idea',theIdea);
  }
  //send a get request to the rest api to retrieve an idea by id
  getIdea(ideaId):Observable<any>{
       return this.http.get(this.base_url+'idea/getIdea/'+ideaId);
  }
  //send a get request to retrieve all ideas
  getAllIdeas():Observable<any>{
    //console.log(this.http.get(this.base_url+'idea'));
    return this.http.get(this.base_url+'idea');
  }
  //@Brian  
  
  getImg():Observable<any>{
    return this.http.get(this.base_url+'idea/image');
  }
  //send request to get all approved ideas to the rest api
  getApprovedIdeas():Observable<any>{
    //console.log(this.http.get(this.base_url+'idea'));
    return this.http.get(this.base_url+'idea/approved');
  }
  //send request to rest api to get unapproved ideas
  getUnApprovedIdeas():Observable<any>{
    //console.log(this.http.get(this.base_url+'idea'));
    return this.http.get(this.base_url+'idea/needapproval');
  }
  //send request to approve and idea with ideaid
  approve(ideaId:string):Observable<any>{
    
    return this.http.put(this.base_url+'idea/approve/'+ideaId,{});
  }
  //@Brian
  //get list of users with no admin access
  getUnApprovedUsers():Observable<any>{

    return this.http.get(this.base_url+'users/getusers');
  }
  //@Brian
  //send request to make user admin
  makeAdmin(theUsername:string):Observable<any>{
    
    return this.http.put(this.base_url+'users/makeadmin/'+theUsername,{});
  }
  //Delete an idea with ideaId
  delete(ideaId:string):Observable<any>{
    
    return this.http.delete(this.base_url+'idea/delete/'+ideaId);
  }
  //@Brian
  //Request to delete a comment with commentDetails object provided
  deleteComment(commentDetails):Observable<any>
  {
  console.log(commentDetails);
   return this.http.put(this.base_url+'idea/deletecomment',commentDetails);
  }
  //@Abinet
  //request to get the most popular(highly rated) ideas 
  getPopularIdeas():Observable<any>{
    
    return this.http.get(this.base_url+'idea/popular');
  }
  //request to get the most discussed (commented) ideas
  getMostDiscussedIdeas():Observable<any>{
    
    return this.http.get(this.base_url+'idea/mostdiscussed');
  }
  //request to get the ideas belonging to logged in user
  getYourIdeas():Observable<any>{
    
    return this.http.get(this.base_url+'idea/yourideas/'+this.getUser());
  }
  //request to search for ideas by the options provided(type,title,owner)
  searchForIdeas(type,title,owner):Observable<any>{
    
    return this.http.get(this.base_url+'idea/searchideas/'+type+"/"+title+"/"+owner);
  }
}
