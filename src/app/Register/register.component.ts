import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {IStudents} from './register.model';
//import {HttpClient, Response, RequestOptions, Headers} from '@angular/common/http';

@Component({
  selector: 'section',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  ngOnInit(){}

}
