const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Check if the Authorization header exists
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // Extract the token from the Authorization header (Bearer <token>)
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token format is incorrect. Use "Bearer <token>"' });
  }

  try {
    // Verify the token using JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded token to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    // Handle invalid or expired token
    res.status(401).json({ error: 'Invalid token or token expired' });
  }
};
