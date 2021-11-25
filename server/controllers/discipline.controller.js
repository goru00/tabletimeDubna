const db = require('../models');
const uuid = require('uuid');
const Discipline = db.discipline;

exports.getDisciplines = (req, res) => {
    Discipline.findAll({ raw: true} ).then(discipline => {
        res.status(200).send(discipline);
    }).catch(err => {
        res.status(500).send({ message: err });
    });
};

exports.setDisciplines = (req, res) => {
    Discipline.create({
        id: uuid.v4(),
        name: req.body.name,
        description: req.body.name
    }).then(() => {
        res.status(200).send({ message: "Discipline was created successfully!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};