const { authJwt, verifySignUp } = require('../middleware');
const controller = require('../controllers/group.controller');
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
        "/api/" + VERSION_API + "/pub/groups",
        [
            authJwt.verifyToken,
            authJwt.isAdmin
        ], 
        controller.getGroups
    );
    app.post(
        "/api/" + VERSION_API + "/pub/groups",
        [
            authJwt.verifyToken,
            verifySignUp.checkGroupNameExisted,
            authJwt.isAdmin
        ],
        controller.setGroups
    );
};