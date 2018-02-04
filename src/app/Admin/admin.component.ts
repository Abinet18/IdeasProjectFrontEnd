import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';
import {Element} from './admin.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'section',
  templateUrl: './admin.component.html',
  styleUrls: ['admin.component.css']
})


export class AdminComponent implements OnInit {

  ngOnInit(){}
<<<<<<< HEAD

  displayedColumns = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
=======
>>>>>>> 8e471910708852b9129c0a280dd957c9223e5944

}


const ELEMENT_DATA: Element[] = [
  {position: "Brian Okuku", name: 'Agriculture app', weight: "Some words"},
  {position: "Kin Jon Un", name: 'Rocket to space', weight: "Some words"},
  {position: "Anna Louis", name: 'Time travel', weight: "Some words"},
  
];


