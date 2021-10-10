const ServiceBonus = require('../modules/ServiceBonus');
const User = require('../modules/User');
const asyncHandler = require('../middlewares/asyncHandler');

module.exports = {
    getServices: asyncHandler(async(req, res, next) => {
        const serviceBonus = await ServiceBonus.find({ userID: req.params.userID });

        res.json({
            success: true,
            data: serviceBonus,
        })
    }),
    postService: asyncHandler(async(req, res, next) => {
        const { name, description, price, userID } = req.body;
        const userId = req.body.userID;
        const user = await User.findById(userId);
        if (!user) return res.json({
            success: false,
            data: `User does not exist`,
        });
        const serviceBonus = await ServiceBonus.create({ name, description, price, userID });
        res.json({
            success: true,
            data: serviceBonus,
        })
    }),
    putService: asyncHandler(async(req, res, next) => {
        const serviceBonus = await ServiceBonus.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json({
            success: true,
            data: serviceBonus,
        });
    }),
    deleteService: asyncHandler(async(req, res, next) => {
        const serviceBonus = await ServiceBonus.findByIdAndDelete(req.params.id);
        if (!serviceBonus) return res.json({
            success: false,
            data: `Cannot find service bonus with ID: ${req.params.id}`,
        })
        res.json({
            success: true,
            data: {},
        })
    })
}