const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')

// The model class represents a table in the database.
class User extends Model {
  static init (connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        field: 'password_hash'
      },
      verified: DataTypes.BOOLEAN
      // The fields id, createdAt and updatedAt are automatically created by sequelize.
    }, {
      hooks: {
        beforeSave: (user, options) => {
          // Hash the password before saving the user.
          const passwordHash = bcrypt.hashSync(user.password, 10)
          user.password = passwordHash
        }
      },
      sequelize: connection
    })
  }
}

module.exports = User
