import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('products', (table) => {
    table
      .uuid('product_id')
      .defaultTo(knex.raw('uuid_generate_v4()'))
      .primary();
    table.string('product_name', 32).notNullable();
    table.string('product_category', 64).notNullable();
    table.string('product_desc', 255).notNullable();
    table.string('product_img', 255).notNullable();
    table.integer('product_count').notNullable();
    table.string('product_price', 32).notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('products');
}
