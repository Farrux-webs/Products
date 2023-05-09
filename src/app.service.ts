import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class AppService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}
  async getHello(): Promise<any> {
    return await this.knex('products').select('*');
  }
}
