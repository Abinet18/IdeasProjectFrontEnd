import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DbService } from '../db.service';

@Injectable()
export class AuthGuard implements CanActivate {

  //redirectUrl:string;
  constructor(private data:DbService,private router:Router)
  {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   {
    // Check if user is logge din
    if (this.data.loggedIn()) {
      return true; // Return true: User is allowed to view route
    } else {
      this.data.redirectUrl = state.url; // Grab previous urul
      this.router.navigate(['/login']); // Return error and route to login page
      return false; // Return false: user not authorized to view page
    }
  }
}
}
