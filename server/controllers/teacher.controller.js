const db = require('../models');
const Teacher = db.teacher;
const Role = db.role;

const Op = db.Sequelize.Op;

exports.getTeachers = (req, res) => {
    Teacher.findAll( { raw: true} )
    .then(teachers => {
        res.status(200).send(teachers);
    }).catch(err => {
        res.status(500).send( { message: err } );
    });
};

exports.setTeachers = (req, res) => {
    Teacher.create({
        id: req.body.id,
        description: req.body.description
    })
    .then(teacher => {
        Role.findAll({
            where: {
                name: {
                    [Op.or]: ["moderator"]
                }
            }
        }).then(roles => {
            res.send({ message: "Teacher was registered successfully!" });
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};