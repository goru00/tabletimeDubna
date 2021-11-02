const mongoose = require('mongoose');

const Users = mongoose.model(
    "Users",
    new mongoose.Schema({
        userName: String,
        passWord: String,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Roles"
            }
        ]
    })
);

module.exports = Users;