const TypeRoom = require('../modules/TypeRoom');
const asyncHandler = require('../middlewares/asyncHandler');

module.exports = {
    getAllTypeRoom: asyncHandler(async(req, res, next) => {
        const typeRooms = await TypeRoom.find();
        res.json({
            success: true,
            data: typeRooms,
        })
    }),
    getTypeRoom: asyncHandler(async(req, res, next) => {
        const typeRoom = await TypeRoom.findById(req.params.id);
        res.json({
            success: true,
            data: typeRoom,
        })
    }),
    postTypeRoom: asyncHandler(async(req, res, next) => {
        const { typeName, description, totals } = req.body;
        const typeRoom = await TypeRoom.create({
            typeName,
            description,
            totals
        });
        res.json({
            success: true,
            data: typeRoom,
        })
    }),
    putTypeRoom: asyncHandler(async(req, res, next) => {
        const typeRoom = await TypeRoom.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json({
            success: true,
            data: typeRoom,
        })
    }),
    deleteTypeRoom: asyncHandler(async(req, res, next) => {
        const typeRoom = await TypeRoom.findByIdAndDelete(req.params.id);
        if (!typeRoom) return res.json({
            success: false,
            data: `canot find type room with ID ${req.params.id}`
        })
        res.json({
            success: true,
            data: {},
        })
    }),
}