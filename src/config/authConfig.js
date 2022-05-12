require('dotenv/config')

module.exports = {
  secret: process.env.JWT_SECRET // The secret key is a environment variable.
  // If you don't have one, you can create in your .env file.
}
