import { Test, type TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello Nam ki ki, tao la ba ki ki, trung ki ki, aaaa"', () => {
      expect(appController.getHello()).toBe('Hello Nam ki ki, tao la ba ki ki, trung ki ki, aaaa');
    });
  });
});
