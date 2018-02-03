import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {IStudents} from './login.model';

@Component({
  selector: 'section',
  template: `
    <div>
      <h2>Login</h2>
     
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  ngOnInit(){}
}
