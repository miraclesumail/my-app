import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'food',
  template: '<h1>{{title}}</h1><h2>{{topic}} details!</h2>'
})

export class FoodComponent{
  title:string = 'china--';
  topic:string = 'food';
}