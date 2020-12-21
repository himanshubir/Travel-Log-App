const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LogEntrySchema = new Schema({
    title: requiredString = {
        type: String,
        required: true
    },
    description: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    image: String,
    latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90
    },
    longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    visitDate: {
        type: Date,
        required: true
    },

}, {
    timestamps: true, // Adds a createdAt and updatedAt
});

const LogEntry = mongoose.model('LogEntry', LogEntrySchema);
module.exports = LogEntry;