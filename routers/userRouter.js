const express = require('express');
const router = express.Router({ mergeParams: true });

const userController = require('../controllers/userController');

router.route('/')
    .get(userController.getAllUser)
    .post(userController.postUser);
router.route('/:id')
    .get(userController.getUser)
    .put(userController.putUser)
    .delete(userController.deleteUser);

module.exports = router;