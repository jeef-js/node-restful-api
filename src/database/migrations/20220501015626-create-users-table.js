// migration: 20220501015626-create-users-table
// If this is the first migration runned on the database, the table SequelizeMeta will be created.
// The table SequelizeMeta is used to keep track of the migrations that have been runned.
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Create table users (id, name, email, password, createdAt, updatedAt) - run yarn sequelize db:migrate to create the table
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false, // The default value is false because the user must verify his email address before being able to login.
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove table users - run yarn sequelize db:migrate:undo to rolllback the migration.
    await queryInterface.dropTable('users');
  }
};
