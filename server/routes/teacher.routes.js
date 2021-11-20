const { authJwt, verifyTeacher } = require('../middleware');
const controller = require('../controllers/teacher.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get(
        "/api/pub/teachers",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ], 
        controller.getTeachers
    );
    app.post(
        "/api/pub/teachers",
        [
            authJwt.verifyToken,
            verifyTeacher.checkDuplicateTeacher,
            authJwt.isAdmin
        ],
        controller.setTeachers
    );
};