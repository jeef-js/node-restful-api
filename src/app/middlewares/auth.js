const jwt = require('jsonwebtoken')
const authConfig = require('../../config/authConfig')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const tokenParts = authHeader.split(' ')

  if (!tokenParts.length === 2) {
    return res.status(401).json({ error: 'Token error' })
  }

  const [scheme, token] = tokenParts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token malformatted' })
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token invalid' })
    }

    req.user = decoded

    return next()
  })
}
