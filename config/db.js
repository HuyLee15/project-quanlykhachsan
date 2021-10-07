const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
        const connect = await mongoose.connect(MONGO_URL);

        console.log("Connect to DB successfully!!");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;