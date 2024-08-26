import type {CreationOptional, InferAttributes} from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import {Card} from './Card';
import {PokemonType} from './PokemonType';

@Table({tableName: 'CardTypes', modelName: 'CardTypes', timestamps: true})
export class CardTypes extends Model<
  InferAttributes<CardTypes>, // instance
  {cardId: string; typeId: number} // creation
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  declare id: CreationOptional<number>;

  @ForeignKey(() => Card)
  @Column({type: DataType.UUID, allowNull: false})
  declare cardId: string;

  @ForeignKey(() => PokemonType)
  @Column({type: DataType.INTEGER, allowNull: false})
  declare typeId: number;

  @BelongsTo(() => Card)
  declare card: Card;

  @BelongsTo(() => PokemonType)
  declare type: PokemonType;
}
