import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class DbService {
  token;
  username;
  message:string;
  messageClass:string;
  private base_url:string="http://localhost:8000/";
  redirectUrl:string;
  constructor(private http:HttpClient) {}
  
  addUser(user):Observable<any>
  {
   return this.http.post(this.base_url+'users/add',user);
  }
  storeUserData(token,user)
  {
    localStorage.setItem('token',token);
    localStorage.setItem('username',user.username);
    localStorage.setItem('admin',user.admin);
    this.token=token;
    this.username=user.username;
  }
  login(user):Observable<any> {
    return this.http.post( this.base_url+'users/login', user);
  }

  // Function to check if user is logged in
  loggedIn() {
    return tokenNotExpired();
  }
  logout() {
    this.token = null; // Set token to null
    this.username = null; // Set user to null
    this.message="You have logged out";
    this.messageClass="alert alert-warning";
    localStorage.clear(); // Clear local storage
  }
  getUser()
  {
    this.username=localStorage.getItem('username');
    return this.username;
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
  isAdmin()
  {
    return localStorage.getItem('admin')>"0"?true:false;
  }
  addIdea(theIdea):Observable<any>
  {
   return this.http.post('http://localhost:8000/idea',theIdea);
  }
 
  getAllIdeas():Observable<any>{
    //console.log(this.http.get('http://localhost:8000/idea'));
    return this.http.get('http://localhost:8000/idea');
  }

  getApprovedIdeas():Observable<any>{
    //console.log(this.http.get('http://localhost:8000/idea'));
    return this.http.get('http://localhost:8000/idea/approved');
  }
  
  getUnApprovedIdeas():Observable<any>{
    //console.log(this.http.get('http://localhost:8000/idea'));
    return this.http.get('http://localhost:8000/idea/needapproval');
  }
  approve(ideaId:string):Observable<any>{
    
    return this.http.put('http://localhost:8000/idea/approve/'+ideaId,true);
  }
  delete(ideaId:string):Observable<any>{
    
    return this.http.delete('http://localhost:8000/idea/delete/'+ideaId);
  }
}
