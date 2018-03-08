import { Component, OnInit, ViewChild} from '@angular/core';
import { CreditCardComponent } from '../credit-card/credit-card.component';

@Component({
  selector: 'china',
  templateUrl: './china.component.html'
})

export class ChinaComponent implements OnInit{
  qwe:string;

  @ViewChild(CreditCardComponent) child:CreditCardComponent;

  ngOnInit(): void {
     console.log('china');
  }

  do($event){
    this.child.say();
    this.qwe = $event;
  }

  
}