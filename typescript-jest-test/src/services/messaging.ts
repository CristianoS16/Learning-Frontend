import { MessagingProtocol } from './interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Sent Message: ', msg);
  }
}
