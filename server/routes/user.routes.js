const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');
const { VERSION_API } = require('./index');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/" + VERSION_API + "/pub/all", controller.allAccess);
    app.get(
        "/api/" + VERSION_API + "/pub/users",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ],
        controller.getUsers
    );
    app.get(
        "/api/" + VERSION_API + "/pub/user",
        [
            authJwt.verifyToken, 
            authJwt.isModerator
        ],
        controller.userBoard
    );
    app.get(
        "/api/" + VERSION_API + "/pub/mod",
        [
            authJwt.verifyToken,
            authJwt.isModerator
        ],
        controller.moderatorBoard
    );
    app.get(
        "/api/" + VERSION_API + "/pub/admin",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ],
        controller.adminBoard
    );
};