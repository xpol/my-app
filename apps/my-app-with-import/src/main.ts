import { NestFactory } from '@nestjs/core';
import { MyAppWithImportModule } from './my-app-with-import.module';

async function bootstrap() {
  const app = await NestFactory.create(MyAppWithImportModule);
  await app.listen(3000);
}
bootstrap();
