import { Component, OnInit } from '@angular/core';
import { DbService } from './../db.service';


@Component({
  selector: 'section',
  template: `
    <div>
      <h2>About this site</h2>
      
    </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  ngOnInit(){}

}
