import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'china',
  templateUrl: './china.component.html'
})

export class ChinaComponent implements OnInit{
  ngOnInit(): void {
     console.log('china');
  }
}