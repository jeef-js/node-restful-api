const { Model, DataTypes } = require('sequelize');

// The model class represents a table in the database.
class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING,
            verified: DataTypes.BOOLEAN,
            // The fields id, createdAt and updatedAt are automatically created by sequelize.
        }, {
            sequelize: connection,
        })
    }
}

module.exports = User;