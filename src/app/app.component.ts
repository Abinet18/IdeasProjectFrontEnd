import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string;
  constructor(public data:DbService,private router:Router)
  {

  }
  logout()
  {
    this.data.logout();   
    this.router.navigate(['/']);
    //this.data.message=null;
  }
}
