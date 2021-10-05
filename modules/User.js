const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user name is invalid'],
    },
    phone: {
        type: String,
        required: [true, 'user phone number is invalid'],
    },
    identificationCard: {
        type: String,
        required: [true, 'user identification card is invalid'],
    },
    gmail: {
        type: String,
        required: [true, 'user gmail is invalid'],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('user', userSchema);