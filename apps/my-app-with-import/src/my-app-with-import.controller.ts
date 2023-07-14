import { Controller, Get } from '@nestjs/common';
import { MyAppWithImportService } from './my-app-with-import.service';

@Controller()
export class MyAppWithImportController {
  constructor(private readonly myAppWithImportService: MyAppWithImportService) {}

  @Get()
  getHello(): string {
    return this.myAppWithImportService.getHello();
  }
}
