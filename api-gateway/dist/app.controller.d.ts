import { AppService } from './app.service';
import { CustomHelloById } from './models/ReqRes';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHelloWorld(): import("rxjs").Observable<any>;
    getCustomHello(body: CustomHelloById): Promise<any>;
}
