// run yarn sequelize db:create to create the database if it doesn't exist

module.exports = {
  dialect: 'postgres', // DB Dialect example: mysql, sqlite, mssql
  host: 'pg_database', // DB Host (in this case, the host is the container name)
  username: 'postgres', // DB Username
  password: 'root', // DB Password
  database: 'users_db', // DB Name
  define: {
    timestamps: true, // Add createdAt and updatedAt fields to the table
    underscored: true // Use snake_case instead of camelCase
  }
}
