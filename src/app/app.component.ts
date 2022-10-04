import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() users: {username:string, id:number}[] = [{
    username: 'someone',
    id: 1
  }]
  }

