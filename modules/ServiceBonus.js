const mongoose = require('mongoose');

const bonusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Bonus name is invalid'],
    },
    description: {
        type: String,
        required: [true, 'description is invalid'],
    },
    price: {
        type: String,
        required: [true, 'Bonus price is invalid'],
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, "user is invalid"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('serviceBonus', bonusSchema);