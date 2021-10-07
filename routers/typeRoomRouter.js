const express = require('express');
const router = express.Router({ mergeParams: true });

const typeRoomController = require('../controllers/typeRoomController');

router.route('/')
    .get(typeRoomController.getAllTypeRoom)
    .post(typeRoomController.postTypeRoom);
router.route('/:id')
    .get(typeRoomController.getTypeRoom)
    .put(typeRoomController.putTypeRoom)
    .delete(typeRoomController.deleteTypeRoom);

module.exports = router;