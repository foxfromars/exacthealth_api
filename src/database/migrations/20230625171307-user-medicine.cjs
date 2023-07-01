'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Medicines",
      "userId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );

  },

  async down (queryInterface) {
    return queryInterface.removeColumn(
      'Medicines',
      'userId'
    )
  }
};
