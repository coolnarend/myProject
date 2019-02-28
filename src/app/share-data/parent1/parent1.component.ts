import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  parentMessage = 'Message from Parent1 Component to Child1 Component via @Input method';

  constructor() { }

  ngOnInit() {
  }

}
