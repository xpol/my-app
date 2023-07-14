import { Injectable } from '@nestjs/common';

@Injectable()
export class MyAppWithImportService {
  getHello(): string {
    return 'Hello World!';
  }
}
