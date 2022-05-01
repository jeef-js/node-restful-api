// run yarn sequelize db:create to create the database if it doesn't exist
module.exports = {
    dialect: 'postgres', // DB Dialect example: mysql, sqlite, mssql
    host: 'localhost', // DB Host
    username: 'postgres', // DB Username
    password: 'root', // DB Password
    database: 'users_DB', // DB Name
    define: {
        timestamps: true, // Add createdAt and updatedAt fields to the table
        underscored: true, // Use snake_case instead of camelCase
    }
};