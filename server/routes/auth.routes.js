const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth.controller');
const { VERSION_API } = require('./index');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/" + VERSION_API + "/auth/signup",
        [
            verifySignUp.checkDuplicateUsername,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );
    app.post(
        "/api/" + VERSION_API + "/auth/signin",
        controller.signin
    );
};



