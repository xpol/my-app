import { Test, TestingModule } from '@nestjs/testing';
import { MyAppWithImportController } from './my-app-with-import.controller';
import { MyAppWithImportService } from './my-app-with-import.service';

describe('MyAppWithImportController', () => {
  let myAppWithImportController: MyAppWithImportController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyAppWithImportController],
      providers: [MyAppWithImportService],
    }).compile();

    myAppWithImportController = app.get<MyAppWithImportController>(MyAppWithImportController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myAppWithImportController.getHello()).toBe('Hello World!');
    });
  });
});
