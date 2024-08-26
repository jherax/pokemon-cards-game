import type {CreationOptional, InferAttributes} from 'sequelize';
import {Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';

import {CardTypes} from './CardTypes';

@Table({tableName: 'PokemonType', modelName: 'PokemonType', timestamps: true})
export class PokemonType extends Model<
  InferAttributes<PokemonType>, // instance
  {type: string} // creation
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  declare id: CreationOptional<number>;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  declare type: string;

  @HasMany(() => CardTypes)
  declare cardTypes: CardTypes[];
}
