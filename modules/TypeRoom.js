const mongoose = require('mongoose');

const typeRoomSchema = new mongoose.Schema({
    typeName: {
        type: String,
        required: [true, "Type room is invalid"],
    },
    description: {
        type: String,
        required: [true, "Description is invalid"]
    },
    totals: {
        type: String,
        required: [true, "Totals is invalid"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('typeRoom', typeRoomSchema);