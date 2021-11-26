const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;
const Discipline = db.discipline;
const Group = db.group;
const Facultie = db.facultie;
const Cabinet = db.cabinet;

checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Error! Username is already in use!"
            });
            return;
        }
        next();
    });
};

checkGroupNameExisted = (req, res, next) => {
    Group.findOne({
        where: {
            name: req.body.name
        }
    }).then(group => {
        if (group) {
            res.status(400).send({
                messsage: "Error! Group is already in use!"
            });
            return;
        }
        next();
    });
}

checkCabinetNameExisted = (req, res, next) => {
    Cabinet.findOne({
        where: {
            name: req.body.name
        }
    }).then(cabinet => {
        if (cabinet) {
            res.status(400).send({
                messsage: "Error! Cabinet is already in use!"
            });
            return;
        }
        next();
    });
}

checkFacultieNameExisted = (req, res, next) => {
    Facultie.findOne({
        where: {
            name: req.body.name
        }
    }).then(facultie => {
        if (facultie) {
            res.status(400).send({
                messsage: "Error! Facultie is already in use!"
            });
            return;
        }
        next();
    });
}

checkDisciplineNameExisted = (req, res, next) => {
    Discipline.findOne({
        where: {
            name: req.body.name
        }
    }).then(discipline => {
        if (discipline) {
            res.status(400).send({
                message: "Error! Discipline is already in use!"
            });
            return;
        }
        next();
    });
};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Error! Role does not exist: " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsername,
    checkRolesExisted,
    checkDisciplineNameExisted,
    checkFacultieNameExisted,
    checkGroupNameExisted,
    checkCabinetNameExisted
};

module.exports = verifySignUp;