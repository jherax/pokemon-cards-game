import {
  type DataTypes as DbTypes,
  type QueryInterface,
  Sequelize,
} from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, DataTypes: typeof DbTypes) {
    await queryInterface.createTable('PokemonTypes', {
      id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });

    await queryInterface.bulkInsert('PokemonTypes', [
      {type: 'Colorless'},
      {type: 'Darkness'},
      {type: 'Dragon'},
      {type: 'Fairy'},
      {type: 'Fighting'},
      {type: 'Fire'},
      {type: 'Grass'},
      {type: 'Lightning'},
      {type: 'Metal'},
      {type: 'Psychic'},
      {type: 'Water'},
    ]);
  },

  async down(queryInterface: QueryInterface, DataTypes) {
    await queryInterface.dropTable('PokemonTypes');
  },
};
