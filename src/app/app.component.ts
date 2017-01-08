import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <div>
    <h2>Calculator!</h2>
    <div>
      <label>A: </label>
      <input id="num1" [(ngModel)]="num1" placeholder="Enter a number"/>
    </div>
    <div>
      <label>B: </label>
      <input id="num2" [(ngModel)]="num2" placeholder="Enter a number"/>
    </div>
    <button id="save" (click)="save()" style="margin-left: 30px;width: 200px; height: 35px;">Add</button>
  </div>
  <hr>
  <div>
    <label id="sum">Sum:{{sum}}</label>
  </div>
</div>
`,
  styles: [`label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}`]
})
export class AppComponent {
  public title = 'Continuous Integration with Travis-CI';
  private num1: number;
  private num2: number;
  private sum : number= 0;

  constructor() {
  }

  save() {
     this.sum = +this.num1 + +this.num2;
  }
}
