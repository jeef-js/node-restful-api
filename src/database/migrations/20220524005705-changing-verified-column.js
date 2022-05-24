'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.removeColumn('users', 'verified'),
      queryInterface.addColumn(
        'users',
        'status',
        {
          type: Sequelize.ENUM,
          values: ['active', 'pending'],
          allowNull: false,
          defaultValue: 'pending'
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    Promise.all([
      queryInterface.removeColumn('users', 'status'),
      queryInterface.addColumn(
        'users',
        'verified',
        {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      )
    ])
  }
}
