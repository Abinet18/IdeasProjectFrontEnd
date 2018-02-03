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

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

}


const ELEMENT_DATA: Element[] = [
  {position: "Brian Okuku", name: 'Agriculture app', weight: 1.0079},
  {position: "Kin Jon Un", name: 'Rocket to space', weight: 4.0026},
  {position: "Anna Louis", name: 'Time travel', weight: 6.941},
  
];


