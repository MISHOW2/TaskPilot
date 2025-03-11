const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization')?.split(' ')[1]; // Assuming Bearer <token>
  
  if (!token) {
    return res.status(401).json({ success: false, msg: 'Access Denied. No token provided.' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, msg: 'Invalid or expired token' });
    }

    req.user = user; // Attach the user to the request object
    next(); // Proceed to the next middleware/route handler
  });
};

module.exports = authenticateToken;
