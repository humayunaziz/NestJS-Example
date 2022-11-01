import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CustomHelloById } from './models/ReqRes';
export declare class AppService implements OnModuleInit {
    private helloWorldClient;
    private helloWorldService;
    constructor(helloWorldClient: ClientGrpc);
    onModuleInit(): void;
    getHelloWorld(): Observable<any>;
    getCustomHello(obj: CustomHelloById): Promise<any>;
}
