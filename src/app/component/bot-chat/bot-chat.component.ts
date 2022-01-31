import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from 'src/app/services/Bot-Chat/chat.services';

@Component({
  selector: 'app-bot-chat',
  templateUrl: './bot-chat.component.html',
  styleUrls: ['./bot-chat.component.css']
})
export class BotChatComponent implements OnInit {

  constructor(public chatService: ChatService) { }
  
  dialogInfo!:boolean
  messages: Message[] = [];
  value!: string;


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
