import type {CreationOptional, InferAttributes} from 'sequelize';
import {
  Column,
  DataType,
  HasMany,
  Index,
  Model,
  Sequelize,
  Table,
} from 'sequelize-typescript';

import {CardTypes} from './CardTypes';

@Table({tableName: 'Card', modelName: 'Card', timestamps: true})
export class Card extends Model<
  InferAttributes<Card>, // instance
  {id?: string; name: string; json: string} // creation
> {
  @Column({
    type: DataType.UUID,
    defaultValue: Sequelize.literal('gen_random_uuid()'),
    primaryKey: true,
    allowNull: false,
  })
  declare id: CreationOptional<string>;

  /** @see https://niallburkley.com/blog/index-columns-for-like-in-postgres */
  @Index({using: 'gin', operator: 'gin_trgm_ops'})
  @Column({type: DataType.STRING, allowNull: false})
  declare name: string;

  @Column({type: DataType.TEXT, allowNull: false})
  declare json: string;

  @HasMany(() => CardTypes)
  declare cardTypes: CardTypes[];
}
