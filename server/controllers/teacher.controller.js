const db = require('../models');
const Teacher = db.teacher;

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
        userId: req.body.userId,
        description: req.body.description
    })
    .then(() => {
        res.status(200).send({ message: "Teacher was registered successfully!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};