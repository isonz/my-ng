import { Component } from '@angular/core';
import { HttpMessageService } from '../http-message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  constructor(public messageService: HttpMessageService) {}
}
