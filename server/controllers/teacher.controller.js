const db = require('../models');
const Teacher = db.teacher;
const Faculties = db.facultie;

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
        if (req.body.faculties) {
            Faculties.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.faculties
                    }
                } 
            }).then(faculties => {
                teacher.setFaculties(faculties).then(() => {
                    res.status(200).send({ message: "Teacher was registered successfully" });
                });
            })
        } else {
            res.status(200).send({ message: "Teacher was registered successfully!"});
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};