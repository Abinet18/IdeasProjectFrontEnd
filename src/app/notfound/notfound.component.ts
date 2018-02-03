import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <h2>Sorry, this page does't exists...</h2>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
