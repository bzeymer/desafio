import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  private messages = [];

  public messageStream = new Subject<string>();

  sendMessage(value: string) {
    // Neste ponto a aplicação enviaria uma request para o backend com a mensagem enviada pelo usuário
    this.receivedMessage(value); // Usaremos esse método para simular o retorno da request
  }

  receivedMessage(value: String) {
    // Este método é um callback da request long-polling (ou qualquer outro método de comunucação real time)
    // Ele é o responsável para espalhar para a aplicação a mensagem recebida
    this.messages.push({ text: value });
    this.messageStream.next(this.messages);
  }

  getMessages(): Observable {
    return this.messageStream.asObservable();
  }
}
