import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	
	// Enable CORS for frontend requests
	app.enableCors({
		origin: true,
		credentials: true,
	});
	
	await app.listen(process.env.PORT ?? 6000);
	console.log(`🚀 Application is running on: http://localhost:${process.env.PORT ?? 6000}`);
}
bootstrap();
