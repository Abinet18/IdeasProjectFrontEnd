import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { DbService } from "../db.service";

@Injectable()
export class MyCanActivateGuard implements CanActivate {

  constructor(private studentService: DbService, private router: Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    let id:any = state.url.split("/").pop();
    
    if(this.studentService.getStudentById(id) ===undefined) {
      this.router.navigate(['notfound']);
    }

    return true;
  }
} 

