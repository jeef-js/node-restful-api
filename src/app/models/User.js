const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

// The model class represents a table in the database.
class User extends Model {
  static init (connection) {
    super.init({
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        field: 'password_hash'
      },
      status: DataTypes.ENUM('active', 'pending'),
      resetPasswordToken: {
        type: DataTypes.STRING,
        field: 'reset_password_token'
      },
      resetPasswordExpires: {
        type: DataTypes.DATE,
        field: 'reset_password_expires'
      },
      activateToken: {
        type: DataTypes.STRING,
        field: 'activate_token'
      }
      // The fields id, createdAt and updatedAt are automatically created by sequelize.
    }, {
      hooks: {
        beforeCreate: (user) => {
          user.activateToken = crypto.randomBytes(20).toString('hex')
        },
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
