// migration: 20220501015626-create-users-table
// At users table creation I forgot to set the email field as unique.
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { // Set the email as unique field
    await queryInterface.changeColumn(
      'users', 
      'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'email', { // Rollback the unique field
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
