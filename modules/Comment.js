const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is invalid"],
    },
    content: {
        type: String,
        required: [true, "Comment content is invalid"],
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, "user is invalid"]
    },
    roomID: {
        type: mongoose.Schema.ObjectId,
        ref: 'room',
        required: [true, "Room is invalid"]
    },
    createDate: {
        type: String,
        required: [true, "Create date is invalid"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("comment", commentSchema);