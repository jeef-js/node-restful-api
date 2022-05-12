// Just a test route to check if the auth middleware and token are working.
const express = require('express')
const auth = require('../middlewares/auth')

const router = express.Router()

router.use(auth)

router.get('/', (req, res) => {
  res.json({
    message: 'Done!',
    userId: req.user.id,
    userName: req.user.name
  })
})

module.exports = router
