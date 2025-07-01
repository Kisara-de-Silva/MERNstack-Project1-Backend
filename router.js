const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/users', controller.addUser);
router.put('/users', controller.updateUser);
router.delete('/users', controller.deleteUser);

module.exports = router;