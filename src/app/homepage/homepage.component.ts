import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomepageComponent implements OnInit {
  message:string;
  constructor(private data:DbService) { }

  ngOnInit() {
    this.message=this.data.message;
  }

}
