const { authJwt, verifySignUp } = require('../middleware');
const controller = require('../controllers/lesson.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get(
        "/api/pub/lessons",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ], 
        controller.getLessons
    );
    app.post(
        "/api/pub/lessons",
        [
            authJwt.verifyToken,
            verifySignUp.checkTimeLessonExisted,
            authJwt.isAdmin
        ],
        controller.setLessons
    );
};