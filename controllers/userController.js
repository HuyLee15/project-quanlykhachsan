const User = require('../modules/User');
const asyncHandler = require('../middlewares/asyncHandler');

module.exports = {
    postUser: asyncHandler(async(req, res, next) => {
        const { name, phone, identificationCard, gmail } = req.body;
        const user = await User.create({
            name,
            phone,
            identificationCard,
            gmail
        });
        res.json({
            success: true,
            data: user,
        });
    }),
    getAllUser: asyncHandler(async(req, res, next) => {
        const users = await User.find();
        res.json({
            success: true,
            data: users,
        });
    }),
    getUser: asyncHandler(async(req, res, next) => {
        const user = await User.findById(req.params.id);
        res.json({
            success: true,
            data: user,
        });
    }),
    putUser: asyncHandler(async(req, res, next) => {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json({
            success: true,
            data: user,
        })
    }),
    deleteUser: asyncHandler(async(req, res, next) => {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.json({
            success: false,
            data: `canot find type room with ID ${req.params.id}`
        })
        res.json({
            success: true,
            data: {},
        })
    }),
}