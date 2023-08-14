const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('auth invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const testUser = payload.userId === '64d8b49a046f600e289685e0';

    req.user = { userId: payload.userId, testUser };

    next();
  } catch (error) {
    throw new UnauthenticatedError('auth invalid');
  }
};

module.exports = auth;
