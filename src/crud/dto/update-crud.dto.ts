import {
  IsString,
  IsInt,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsUUID,
} from 'class-validator';

export class UpdateCrudDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(32)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  desc: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsInt()
  @IsNotEmpty()
  count: number;

  @IsString()
  @IsNotEmpty()
  price: number;



  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(32)
  category_prod: string;
}
