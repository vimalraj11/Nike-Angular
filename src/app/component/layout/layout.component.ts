import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from 'src/app/services/Bot-Chat/chat.services';
import { ChatservicesService } from 'src/app/services/chatservices.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  dialogInfo!:boolean
  messages: Message[] = [];
  value!: string;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }

}
