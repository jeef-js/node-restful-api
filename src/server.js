const express = require('express')
const morgan = require('morgan')

const userRoutes = require('./app/routes/userRoutes')
const authRoutes = require('./app/routes/authRoutes')

require('./database') // Initialize the database

const app = express()
const PORT = 3000
const HOST = '0.0.0.0'

app.use(morgan('dev')) // Log all requests
app.use(express.json())

app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, HOST)

console.log('Server running on port ' + PORT + ' at ' + HOST)
