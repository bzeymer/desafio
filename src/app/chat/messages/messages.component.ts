import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @ViewChild('messagesList') list: ElementRef;

  public messages = [];

  constructor(private chatService: ChatService) {
    this.chatService.getMessages().subscribe((messages) => {
      this.messages = messages;
      setTimeout(() => this.scrollToBottom(), 0);
    })
  }

  private scrollToBottom() {
    if (this.list) {
      this.list.nativeElement.scrollTop = this.list.nativeElement.scrollHeight;
    }
  }

  ngOnInit() {
  }

}
