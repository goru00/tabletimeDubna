const mongoose = require('mongoose');

const Groups = mongoose.model(
    "Groups",
    new mongoose.Schema({
        name: {
            type: String,
        },
        faculties: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Faculties"
        },
        disciplines: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Disciplines"
            }
        ]
    })
);

module.exports = Groups;