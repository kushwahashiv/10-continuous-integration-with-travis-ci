import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private num1: number;
  private num2: number;
  private sum : number= 0;

  constructor() {
  }

  save() {
     this.sum = +this.num1 + +this.num2;
  }
}
