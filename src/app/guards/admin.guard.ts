import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbService } from '../db.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private data:DbService,private router:Router)
{
  
}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 {
  // Check if user is amdin
  if (this.data.isAdmin()) {
    return true; // Return true: User is allowed to view route
  } else {
    this.router.navigate(['/notauthorized']); // Return error and route to notauthorized page
    return false; // Return false: user not authorized to view page
  }
}
}
}
