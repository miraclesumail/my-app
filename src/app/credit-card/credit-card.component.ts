import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CreditCardService } from './credit-card.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-credit-card',
  template: `
    <p (click)="do()">Your credit card is: {{ creditCardNumber | creditCardMask }}</p>
  `
})
export class CreditCardComponent implements OnInit {
  creditCardNumber: string;

  @Output()
  foo = new EventEmitter<string>();

  constructor(private creditCardService: CreditCardService, private http:Http) {}

  ngOnInit() {
    this.creditCardNumber = this.creditCardService.getCreditCard();
  }

  create():string{
    let str ="";
    let aa = ['','','',''].reduce((prev,next) => 
        prev.concat("abcdefghij"[Math.floor(Math.random()*9)])
    ,str)
    console.log(aa);
    return aa
  }

  do():void{
    this.http.get('assets/json/qq.json').
    switchMap(res => res.json()).subscribe(data => console.log(data));
    this.foo.emit(this.create());
  }  

  say():void{
    console.log('cdswefe');
  }
}