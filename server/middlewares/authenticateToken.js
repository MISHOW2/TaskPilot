const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    // Get the token from the request header
    const authHeader = req.header('Authorization');
    console.log("Authorization Header:", authHeader); // Debugging

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, msg: 'Access Denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    console.log("Extracted Token:", token); // Debugging

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
