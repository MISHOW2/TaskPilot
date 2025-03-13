const jwt = require('jsonwebtoken');

const generateToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};

module.exports = generateToken;
