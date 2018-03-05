import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})

export class TestComponent implements OnInit{
  ngOnInit(): void {
     console.log('test');
  }
}