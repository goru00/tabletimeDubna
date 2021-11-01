const mongoose = require("mongoose");

const Roles = mongoose.model(
    "Roles",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        }
    })
);

module.exports = Roles;