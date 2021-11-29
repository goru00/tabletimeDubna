const db = require('../models');
const uuid = require('uuid');
const Lesson = db.lesson;

exports.getLessons = (req, res) => {
    Lesson.findAll({ raw: true} ).then(group => {
        res.status(200).send(group);
    }).catch(err => {
        res.status(500).send({ message: err });
    });
};

exports.setLessons = (req, res) => {
    Lesson.create({
        id: uuid.v4(),
        startL: req.body.startL,
        finishL: req.body.finishL
    }).then(() => {
        res.status(200).send({ message: "Lesson was created successfully!"});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};