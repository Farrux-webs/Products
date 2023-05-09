import { Inject, Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { IProduct } from './types/todo.interface';

@Injectable()
export class CrudService {
  constructor(@Inject('KnexConnection') private knex: any) {}
  async create(body: CreateCrudDto): Promise<Record<string, string>> {
    const { name, desc, image, count, price, category_prod } = body;

    await this.knex('products')
      .insert({
        product_name: name,
        product_category: category_prod,
        product_desc: desc,
        product_img: image,
        product_count: count,
        product_price: price,
      })
      .returning('*');

    return { message: 'success' };
  }

  async findAll(): Promise<IProduct[] | []> {
    const Products = await this.knex('products').select('*');
    return Products;
  }

  async findOne(id: string): Promise<IProduct[] | undefined> {
    const Products: IProduct[] = await this.knex('products')
      .select('*')
      .where({ product_id: id });

    return Products;
  }

  async update(
    id: string,
    body: UpdateCrudDto,
  ): Promise<Record<string, string>> {
    const { name, desc, image, count, price, category_prod } = body;

    const ProductsUpd = await this.knex('products')
      .update({
        product_name: name,
        product_category: category_prod,
        product_desc: desc,
        product_img: image,
        product_count: count,
        product_price: price,
      })
      .where({ product_id: id })
      .returning('*');
    return { message: 'updated', ProductsUpd };
  }

  async remove(id: string): Promise<Record<string, string>> {
    const ProductDeleted = await this.knex('products')
      .del()
      .where({ product_id: id })
      .returning('*');

    return { message: 'deleted', ProductDeleted };
  }
}
