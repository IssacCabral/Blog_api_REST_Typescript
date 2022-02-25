import {QueryInterface, DataTypes} from 'sequelize'

export = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable('categories', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('categories');
  }
};
