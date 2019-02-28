import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  message = 'Message from Child2 Component to Parent2 Component via @ViewChild method';
  constructor() { }

  ngOnInit() {
  }

}
