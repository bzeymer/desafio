import { Component, OnInit } from '@angular/core';
import { Message } from '../../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  public message: String;

  constructor(private chatService: ChatService) {
    this.message = '';
  }

  ngOnInit() {
  }

  send() {
    if (this.message != '') {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }

}
