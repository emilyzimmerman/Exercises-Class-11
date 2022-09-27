import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  height:number = 120;
  width: number = 300;

constructor(){
  setTimeout(() => {
    this.width = 500
  }, 1000);
}
}
