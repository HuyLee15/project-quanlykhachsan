const express = require('express');
const router = express.Router({ mergeParams: true });
const serviceBonusController = require('../controllers/serviceBonusControler');

router.route('/:id')
    .delete(serviceBonusController.deleteService)
    .put(serviceBonusController.putService);

router.route('/')
    .post(serviceBonusController.postService);

router.route('/:userID')
    .get(serviceBonusController.getServices); //get theo user

module.exports = router;