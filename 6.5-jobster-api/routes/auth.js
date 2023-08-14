const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');
const rateLimiter = require('express-rate-limit');

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 1,
  message: {
    msg: 'too many requests from this IP, please try again after 15 mins',
  },
});

const { login, register, updateUser } = require('../controllers/auth');

router.post('/register', apiLimiter, register);
router.post('/login', apiLimiter, login);
router.patch('/updateUser', authUser, testUser, updateUser);

module.exports = router;
