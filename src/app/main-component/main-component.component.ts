import { Component, OnInit } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import * as html2canvas from 'html2canvas';

declare var firebase: any;

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})

export class MainComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
