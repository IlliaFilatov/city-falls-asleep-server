import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway(8081, { transports: ['websocket'] })
export class EventsGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    console.log('data: ', data);
    return data;
  }
}
