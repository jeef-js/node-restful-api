const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/authConfig.json')

module.exports = {
  async store (req, res) { // Create a new user
    const { name, email, password } = req.body

    try {
      const user = await User.create({
        name,
        email,
        password
      })

      return res.json(user)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async index (req, res) { // List all users
    try {
      const users = await User.findAll()

      return res.json(users)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async show (req, res) { // Show a specific user
    try {
      const user = await User.findByPk(req.params.id)

      return res.json(user)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  async update (req, res) { // Update a specific user
    const { name, email, password } = req.body

    try {
      const user = await User.findByPk(req.params.id)

      await user.update({
        name,
        email,
        password
      })

      return res.json(user)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: error.message })
    }
  },

  async destroy (req, res) { // Delete a specific user
    const user = await User.findByPk(req.params.id)

    await user.destroy()

    return res.json({ message: 'User deleted' })
  },

  async login (req, res) { // Login a specific user
    const { email, password } = req.body

    if (!email || !password) {
      return res.json({ message: 'Email and password are required' })
    }

    try {
      const user = await User.findOne({
        where: {
          email
        }
      })

      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }

      if (!user.verified) {
        return res.status(400).send({ message: 'Please verify your email address before logging in' }) // Send a message to the user that he needs to verify his email address
      }

      if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ message: 'Invalid password' })
      }

      user.password = undefined // Remove the password from the user object

      const token = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: '24h' }) // Create a token with the user object and a secret key

      return res.status(200).json({
        user,
        token
      })
    } catch (error) {
      return res.json({ message: 'Error on login' })
    }
  },

  async verify (req, res) { // Verifies the email address of a specific user
    try {
      const user = await User.findByPk(req.params.id)

      if (!user) {
        return res.json({ message: 'User not found' })
      }

      user.update({
        verified: true
      }, {
        fields: ['verified'] // Only update the specified field
        // This option fix the problem of the password being rehashed when the user verifies his email address
      })

      return res.json(user)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}
