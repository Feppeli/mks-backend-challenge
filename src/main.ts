import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configurantion
  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Api de Filmes')
    .setDescription('Api contruida com o intuito de manipular BD com filmes')
    .setVersion('1.0')
    .addTag('movies')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
