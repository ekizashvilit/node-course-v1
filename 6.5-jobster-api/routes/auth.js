const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authentication');
const testUser = require('../middleware/testUser');

const { login, register, updateUser } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.patch('/updateUser', authUser, testUser, updateUser);

module.exports = router;
