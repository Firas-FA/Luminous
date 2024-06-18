const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('\n MongoDB connected successfully..!');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
    }
};

module.exports = connectDB;
