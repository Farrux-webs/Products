import { Module } from '@nestjs/common';
import { databaseProvider } from './providers/database.service';

@Module({
  imports: [],
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class SharedModule {}
