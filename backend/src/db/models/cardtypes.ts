import {
  type CreationOptional,
  DataTypes,
  type ForeignKey,
  type InferAttributes,
  type InferCreationAttributes,
  Model,
} from 'sequelize';

import getConnection from '../connection';
import Card from './card';
import PokemonTypes from './pokemontypes';

class CardTypes extends Model<
  InferAttributes<CardTypes>,
  InferCreationAttributes<CardTypes>
> {
  declare id: CreationOptional<number>;
  declare cardId: ForeignKey<Card['id']>;
  declare typeId: ForeignKey<PokemonTypes['id']>;
}

CardTypes.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    cardId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    typeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    sequelize: getConnection(),
    modelName: 'CardTypes',
  },
);

// Associations
CardTypes.belongsTo(Card, {
  foreignKeyConstraint: true,
  foreignKey: {
    name: 'cardId',
    allowNull: false,
  },
  as: 'card',
});

CardTypes.belongsTo(PokemonTypes, {
  foreignKeyConstraint: true,
  foreignKey: {
    name: 'typeId',
    allowNull: false,
  },
  as: 'type',
});

export default CardTypes;
