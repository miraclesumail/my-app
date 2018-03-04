import { Component } from '@angular/core';

export class Hero{
    id:number;
    title:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    color = 'orange';

  persons:Hero[] = [
    {id:1,title:'qqqq'},
    {id:2,title:'wwww'},
    {id:3,title:'eeee'},
    {id:4,title:'rrrr'}
  ];
}
