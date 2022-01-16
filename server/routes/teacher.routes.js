const { authJwt } = require('../middleware');
const controller = require('../controllers/teacher.controller');
const { VERSION_API } = require('./index');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get(
        "/api/" + VERSION_API + "/pub/teachers",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ], 
        controller.getTeachers
    );
    app.post(
        "/api/" + VERSION_API + "/pub/teachers",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ],
        controller.setTeachers
    );
};