import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular test';


   @HostListener('window:message', ['$event'])
  onMessage(e) {
    debugger;
    if (e.origin != "http://localhost:4200") {
      return false;
    }
    if (e.data.for == "user") {
      alert('here i am');
    }
  }
}
 