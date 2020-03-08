import { Component, OnInit } from '@angular/core';
import { MessageService } from '../app/services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {

    subscription: Subscription;
    messages: any[] = [];

  simpleLinks: string[] = [
    'https://angular.io/',
    'https://material.angular.io/',
    'https://reactjs.org/'
  ]
  
  complexLinks: any[] = [];
  constructor(private messageService: MessageService) {
 this.subscription = this.messageService.getMessage().subscribe(message => {
          debugger;
          if (message) {
            this.messages.push(message);

            this.complexLinks = message.text.value;
          } else {
            // clear messages when empty message received
            this.messages = [];
          }
        });
    
   }

  ngOnInit() {
  }

}