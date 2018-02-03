import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {IStudents} from './popular.model';

@Component({
  selector: 'section',
  template: `
    <div>
      <h2>Most Popular posts</h2>
      <ul class="list-group">
        <li *ngFor="let st of students" class="list-group-item">
          <a [routerLink]="['profile', st.stuId]" >List of Popular posts<!--{{st.name}}--></a>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class MostPopularComponent implements OnInit {

  students:Array<IStudents> = [];

  constructor(private studentService: DbService) {

  }

  ngOnInit() {
    this.students = this.studentService.getData();
  }

}
