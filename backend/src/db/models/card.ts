import {
  type CreationOptional,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  Model,
} from 'sequelize';

import getConnection from '../connection';
import CardTypes from './cardtypes';

class Card extends Model<InferAttributes<Card>, InferCreationAttributes<Card>> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare json: string;
}

Card.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    json: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    sequelize: getConnection(),
    modelName: 'Card',
  },
);

// Associations: A card has many card types
Card.hasMany(CardTypes, {
  sourceKey: 'id',
  foreignKey: {
    name: 'cardId',
    allowNull: false,
  },
  as: 'cardTypes',
  onDelete: 'CASCADE',
});

export default Card;
