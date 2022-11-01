export interface CustomHelloById {
    id: number;
}
export interface CustomHello {
    id: number;
    name: string;
}
export declare class AppController {
    getHelloWorld(): {
        reply: string;
    };
    getCustomHello(data: CustomHelloById): CustomHello;
}
