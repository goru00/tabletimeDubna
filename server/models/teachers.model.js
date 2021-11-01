const mongoose = require('mongoose');

const Teachers = mongoose.model(
    "Teachers",
    new mongoose.Schema({
        userName: {
            type: String,
        },
        name: {
            type: String
        },
        faculties: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Faculties"
            }
        ]
    })
);

module.exports = Teachers;