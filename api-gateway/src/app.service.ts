import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CustomHelloById } from './models/ReqRes';

interface HelloWorldService {
  getHelloWorld(data: any): Observable<any>;
  getCustomHello(data: any): Observable<any>;
}

@Injectable()
export class AppService implements OnModuleInit {
  private helloWorldService: HelloWorldService;

  constructor(
    @Inject('HELLO_WORLD_SERVICE') private helloWorldClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.helloWorldService =
      this.helloWorldClient.getService<HelloWorldService>('HelloWorldService');
  }

  getHelloWorld() {
    return this.helloWorldService.getHelloWorld({});
  }

  async getCustomHello(obj: CustomHelloById): Promise<any> {
    console.log('from service');
    return this.helloWorldService.getCustomHello(obj);
  }
}
