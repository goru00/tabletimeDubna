const { authJwt, verifySignUp } = require('../middleware');
const controller = require('../controllers/facultie.controller');
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
        "/api/" + VERSION_API + "/pub/faculties",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ], 
        controller.getFaculties
    );
    app.post(
        "/api/" + VERSION_API + "/pub/faculties",
        [
            authJwt.verifyToken,
            verifySignUp.checkFacultieNameExisted,
            authJwt.isAdmin
        ],
        controller.setFaculties
    );
};