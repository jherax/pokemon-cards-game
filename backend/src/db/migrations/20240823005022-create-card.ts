import {
  type DataTypes as DbTypes,
  type QueryInterface,
  Sequelize,
} from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, DataTypes: typeof DbTypes) {
    await queryInterface.createTable('Card', {
      id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('gen_random_uuid()'),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      json: {
        allowNull: false,
        type: DataTypes.TEXT,
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

    /** @see https://niallburkley.com/blog/index-columns-for-like-in-postgres */
    await queryInterface.addIndex('Card', ['name'], {
      using: 'gin',
      operator: 'gin_trgm_ops',
    });
  },

  async down(queryInterface: QueryInterface, DataTypes) {
    await queryInterface.dropTable('Card');
  },
};
