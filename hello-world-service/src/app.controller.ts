import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

export interface CustomHelloById {
  id: number;
}

export interface CustomHello {
  id: number;
  name: string;
}

@Controller()
export class AppController {
  @GrpcMethod('HelloWorldService', 'GetHelloWorld')
  getHelloWorld() {
    return { reply: 'Hello World!' };
  }

  @GrpcMethod('HelloWorldService', 'GetCustomHello')
  getCustomHello(data: CustomHelloById): CustomHello {
    const items = [
      { id: 1, name: 'humayun' },
      { id: 2, name: 'asad ' },
      { id: 3, name: 'haji ' },
      { id: 4, name: 'rana ' },
    ];

    console.log(data);
    return items.find(({ id }) => id === data.id);
  }
}
