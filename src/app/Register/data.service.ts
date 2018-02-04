import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  data:any;
  constructor(private http:HttpClient) {}
  
   getData():Observable<any>{
     let url="https://jsonplaceholder.typicode.com/users/1";
     return this.http.get(url);
   }
   
   getPosts(){
    let url="https://jsonplaceholder.typicode.com/posts?userid=1";
    return this.http.get(url);
   }

}
