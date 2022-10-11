import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {
  panelOpenState = false;
  longText = `hola`;
  constructor() { }

  ngOnInit(): void {
  }

}
