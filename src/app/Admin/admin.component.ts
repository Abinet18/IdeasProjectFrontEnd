import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {IStudents} from './admin.model';

@Component({
  selector: 'section',
  template: `
    <div>
      <h2>Admin Panel</h2>
     
    </div>
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  ngOnInit(){}

}
