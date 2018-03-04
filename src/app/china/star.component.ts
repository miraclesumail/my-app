import { Component} from '@angular/core';


@Component({
  selector: 'star',
  template: '<h1>{{title}}</h1><h2>{{topic}} details!</h2>'
})

export class StarComponent{
  title:string = 'china--';
  topic:string = 'star';
}