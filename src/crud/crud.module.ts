import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { SharedModule } from './../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [CrudController],
  providers: [CrudService],
})
export class CrudModule {}
