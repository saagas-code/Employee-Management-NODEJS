import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  await app.listen(process.env.APP_PORT || 3000);
  console.log("Rodando na Porta: ", process.env.APP_PORT || 3000)
}
bootstrap();
