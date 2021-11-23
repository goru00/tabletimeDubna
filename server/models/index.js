const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.HOST,
        dialect: "mysql",
        operatorAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cabinet = require('../models/cabinet.model')(sequelize, Sequelize);
db.user = require('../models/user.model')(sequelize, Sequelize);
db.role = require('../models/role.model')(sequelize, Sequelize);
db.studyformat = require('../models/studyformat.model')(sequelize, Sequelize);
db.group = require('../models/group.model')(sequelize, Sequelize);
db.teacher = require('../models/teacher.model')(sequelize, Sequelize);
db.dow = require('../models/dow.model')(sequelize, Sequelize);
db.discipline = require('../models/discipline.model')(sequelize, Sequelize);
db.facultie = require('../models/facultie.model')(sequelize, Sequelize);
db.lesson = require('../models/lesson.model')(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.user.hasOne(db.teacher, { onUpdate: "cascade", onDelete: "cascade" });

db.ROLES = ["user", "moderator", "admin"];

module.exports = db;