'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'activate_token',
      { type: Sequelize.STRING, allowNull: true }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'activate_token')
  }
}
