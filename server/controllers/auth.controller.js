const db = require('../models');
const uuid = require('uuid');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    User.create({
        id: uuid.v4(),
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
        fullname: req.body.fullname
    })
    .then(user => {
        if (req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            }).then(roles => {
                user.setRoles(roles).then(() => {
                    res.send({ message: "User was registered successfully!"});
                });
            });
        } else {
            user.setRoles([1]).then(() => {
                res.send({ message: "User was registered successfully!" })
            });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        var token = jwt.sign({ id: user.id }, process.env.SECRET, {
            expiresIn: 86400
        });
        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLES_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                roles: authorities,
                accessToken: token
            });
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};