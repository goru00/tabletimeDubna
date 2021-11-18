const db = require('../models');
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public content");
};
exports.userBoard = (req, res) => {
    res.status(200).send("User content");
};
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin content");
};
exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator content");
};

exports.getUsers = (req, res) => {
    User.findAll({raw: true})
    .then(users => {
        var user = [];
        for (let i = 0; i < users.length; i++)
        {
            user.push({
                id: users[i].id,
                username: users[i].username,
                fullname: users[i].fullname
            });
        }
        res.status(200).send(user);
    })
    .catch(err => {
        res.status(500).send({ message: err });
    });
};