const mongoose = require('mongoose');

const StudyFormats = mongoose.model(
    "StudyFormats",
    new mongoose.Schema({
        name: {
            type: String
        }
    })
);

module.exports = StudyFormats;