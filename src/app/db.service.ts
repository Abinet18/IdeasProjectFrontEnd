import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class DbService {
  token;
  user;
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
    localStorage.setItem('user',user);
    this.token=token;
    this.user=user;
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
    this.user = null; // Set user to null
    this.message="You have logged out";
    this.messageClass="alert alert-warning";
    localStorage.clear(); // Clear local storage
  }

}
