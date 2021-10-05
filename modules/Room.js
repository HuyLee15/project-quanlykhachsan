const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: [true, "Room number is invalid"],
    },
    bookingDate: {
        type: String,
        required: [true, "Booking date is invalid"]
    },
    checkOutDate: {
        type: String,
        required: [true, "Check out date is invalid"]
    },
    price: {
        type: String,
        required: [true, "Price is invalid"]
    },
    description: {
        type: String,
        required: [true, "Description is invalid"]
    },
    typeRoomID: {
        type: mongoose.Schema.ObjectId,
        ref: 'typeRoom',
        required: [true, "Type room is invalid"]
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, "user is invalid"]
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('room', roomSchema);