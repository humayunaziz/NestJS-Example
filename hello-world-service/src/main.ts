import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const options = {
  transport: Transport.GRPC,
  options: {
    package: 'hello',
    protoPath: join(__dirname, './protos/hello-world.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, options);

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
