const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send('login user');
};

module.exports = {
  register,
  login,
};

// checking errors with controller ----

// const { BadRequestError } = require('../errors');

// if (!name || !email || !password) {
//   throw new BadRequestError('please provide values');
// }
