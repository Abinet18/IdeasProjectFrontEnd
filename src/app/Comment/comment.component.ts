import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {IStudents} from './comment.model';

@Component({
  selector: 'comment-section',
  templateUrl: './comment.component.html',
  styleUrls: ['comment.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(){}

}
