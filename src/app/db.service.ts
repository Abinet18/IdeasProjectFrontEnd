import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DbService {

  constructor(private http:HttpClient) {}
  
  addUser(user):Observable<any>
  {
   return this.http.post('http://localhost:8000/users',user);
  }

}
