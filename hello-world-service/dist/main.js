"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const options = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: 'hello',
        protoPath: (0, path_1.join)(__dirname, './protos/hello-world.proto'),
    },
};
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, options);
    await app
        .listen()
        .then(() => {
        console.log('server is running');
    })
        .catch((err) => {
        console.log(err);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map