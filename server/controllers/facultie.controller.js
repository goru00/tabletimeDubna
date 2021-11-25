const db = require('../models');
const uuid = require('uuid');
const Facultie = db.facultie;

exports.getFaculties = (req, res) => {
    Facultie.findAll({ raw: true} ).then(facultie => {
        res.status(200).send(facultie);
    }).catch(err => {
        res.status(500).send({ message: err });
    });
};

exports.setFaculties = (req, res) => {
    Facultie.create({
        id: uuid.v4(),
        name: req.body.name,
        description: req.body.description
    }).then(() => {
        res.status(200).send({ message: "Facultie was created successfully!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};