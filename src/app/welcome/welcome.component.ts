import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public data:DbService) { }

  ngOnInit() {
  }

}
