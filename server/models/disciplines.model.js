const mongoose = require('mongoose');

const Disciplines = mongoose.model(
    "Disciplines",
    new mongoose.Schema({
        name: {
            type: String,
        },
        faculties: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Faculties"
            }
        ],
        teachers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teachers"
            }
        ]
    })
)

module.exports = Disciplines;