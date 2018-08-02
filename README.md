## Desafio front-end

O desafio foi realizado com Angular 6, pois ele permite de uma forma simples a evolução do sistema por meio de componentes (similiar a outros frameworks).

Para atender o requisito futuro de envio de mensagens por ajax e long-polling, o serviço de controle do chat é independente dos componentes, sendo que a comunicação serviço -> componente, se dá via [RxJS Subject](https://rxjs-dev.firebaseapp.com/api/index/class/Subject).

Convido-os a visitar um pequeno [projeto](https://github.com/bzeymer/node-chat-app) que desenvolvi que se trata exatamente de uma aplicação de chat, na qual não utilizei frameworks no front-end, porém o back-end foi feito com WebSockets e  NodeJS. Uma live demo deste projeto está disponível em <https://node-chatterson.herokuapp.com/>

### Instalação

A aplicação requer [Node.js](https://nodejs.org/) v8+ para rodar.

Baixe o código do repositório;

Instale as dependências e rode a aplicação;

```sh
$ npm install
$ ng serve
```

Acesse <http://localhost:4200>
