import {
  type CreationOptional,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  Model,
} from 'sequelize';

import getConnection from '../connection';
import CardTypes from './cardtypes';

class PokemonTypes extends Model<
  InferAttributes<PokemonTypes>,
  InferCreationAttributes<PokemonTypes>
> {
  declare id: CreationOptional<number>;
  declare type: string;
}

PokemonTypes.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: getConnection(),
    modelName: 'PokemonTypes',
  },
);

// Associations: A pokémon type has many card types
PokemonTypes.hasMany(CardTypes, {
  sourceKey: 'id',
  foreignKey: {
    name: 'typeId',
    allowNull: false,
  },
  as: 'cardTypes',
  onDelete: 'CASCADE',
});

export default PokemonTypes;
