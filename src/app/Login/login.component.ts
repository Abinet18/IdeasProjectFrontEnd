import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {IStudents} from './login.model';

@Component({
  selector: 'section',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(){}
}
