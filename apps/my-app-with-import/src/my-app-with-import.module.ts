import { SharedModule } from "@app/shared";
import { Module } from '@nestjs/common';
import { MyAppWithImportController } from './my-app-with-import.controller';
import { MyAppWithImportService } from './my-app-with-import.service';

@Module({
  imports: [SharedModule],
  controllers: [MyAppWithImportController],
  providers: [MyAppWithImportService],
})
export class MyAppWithImportModule {}
