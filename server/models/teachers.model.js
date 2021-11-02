const mongoose = require('mongoose');

const Teachers = mongoose.model(
    "Teachers",
    new mongoose.Schema({
        userName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
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