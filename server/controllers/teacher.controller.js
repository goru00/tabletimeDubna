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