import knex from 'knex';
import knexFile from '../../../knexfile';

export const databaseProvider = {
  provide: 'KnexConnection',
  useFactory: async () => {
    const knexconfig = knexFile;
    return knex(knexconfig['development']);
  },
};
