const jwt = require('jsonwebtoken');

// importer dotenv pour cacher le token d'authentification
require('dotenv').config({ path: '../.env' })

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId ) {
      throw 'User ID non valable !';
    } else {
      next();
    }
  } catch (error) {
    res.status(403).json({ error })
  }
}
