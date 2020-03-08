import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {

links = [{
    text: "Test",
    link: "https://emaua.com"
  }]

  simpleLinks: string[] = [
    'https://angular.io/',
    'https://material.angular.io/',
    'https://reactjs.org/'
  ]
  
  constructor() {

    
   }

  ngOnInit() {
  }

}