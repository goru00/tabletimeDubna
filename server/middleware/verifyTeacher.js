const db = require('../models');
const Teacher = db.teacher;

checkDuplicateTeacher = (req, res, next) => {
    Teacher.findOne({
        where: {
            id: req.body.id
        }
    }).then(teacher => {
        if (teacher) {
            res.status(400).send({
                message: "Error! Teacher is already in use!"
            });
            return;
        }
        next();
    });
};

const verifyTeacher = {
    checkDuplicateTeacher
};

module.exports = verifyTeacher;