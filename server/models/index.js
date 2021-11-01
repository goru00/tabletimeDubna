const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.users = require('./users.model');
db.roles = require('./roles.model');
db.faculties = require('./faculties.model');
db.disciplines = require('./disciplines.model');
db.teachers = require('./teachers.model');
db.groups = require('./groups.model');

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;