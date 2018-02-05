import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { DbService } from './db.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token=localStorage.getItem('token');
    if(token)
    {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': localStorage.getItem('token')// Attach token
      }
    });
    }
    return next.handle(request);
  }
}