const db = require('../models');
const uuid = require('uuid');
const Cabinet = db.cabinet;

exports.getCabinets = (req, res) => {
    Cabinet.findAll({ raw: true} ).then(cabinet => {
        res.status(200).send(cabinet);
    }).catch(err => {
        res.status(500).send({ message: err });
    });
};

exports.setCabinets = (req, res) => {
    Cabinet.create({
        id: uuid.v4(),
        name: req.body.name,
        description: req.body.description
    }).then(() => {
        res.status(200).send({ message: "Cabinet was created successfully!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};