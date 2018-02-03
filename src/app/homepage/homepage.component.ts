import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  template: `
    <h2>The Homepage</h2>
    <!--<img src="https://www.jamesedition.com/cars/lamborghini/aventador_s/201
    5-lamborghini-aventador-roadster-for-sale-10066373" width="90%" />-->
  `,
  styles: []
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
