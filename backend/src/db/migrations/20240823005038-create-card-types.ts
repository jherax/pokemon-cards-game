import {
  type DataTypes as DbTypes,
  type QueryInterface,
  Sequelize,
} from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, DataTypes: typeof DbTypes) {
    await queryInterface.createTable('CardTypes', {
      id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      cardId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: 'Cards', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      typeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'PokemonTypes', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
  },

  async down(queryInterface: QueryInterface, DataTypes) {
    await queryInterface.dropTable('CardTypes');
  },
};
