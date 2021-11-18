const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/pub/all", controller.allAccess);
    app.get(
        "/api/pub/users",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ],
        controller.getUsers
    );
    app.get(
        "/api/pub/user",
        [
            authJwt.verifyToken, 
            authJwt.isModerator
        ],
        controller.userBoard
    );
    app.get(
        "/api/pub/mod",
        [
            authJwt.verifyToken,
            authJwt.isModerator
        ],
        controller.moderatorBoard
    );
    app.get(
        "/api/pub/admin",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ],
        controller.adminBoard
    );
};