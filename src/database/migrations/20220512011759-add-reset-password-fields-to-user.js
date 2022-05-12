'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.addColumn(
        'users',
        'reset_password_token',
        { type: Sequelize.STRING, allowNull: true }),
      queryInterface.addColumn(
        'users',
        'reset_password_expires',
        { type: Sequelize.DATE, allowNull: true })
    ])
  },

  async down (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.removeColumn('users', 'reset_password_token'),
      queryInterface.removeColumn('users', 'reset_password_expires')
    ])
  }
}
