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
        res.status(200).send(users);
    })
    .catch(err => {
        res.status(500).send({ message: err });
    });
};