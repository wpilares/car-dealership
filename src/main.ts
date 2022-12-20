import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo deja la data indicada en el DTO
      forbidNonWhitelisted: true, //Indica errores para propiedades que no están en el DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
