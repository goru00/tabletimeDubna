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
db.parity = require('../models/parity.model')(sequelize, Sequelize);

const UserRoles = sequelize.define('user_roles', {
    userId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
            model: db.user,
            key: 'id'
        }
    },
    roleId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
            model: db.role,
            key: 'id'
        }
    }
});

const TeacherFaculties = sequelize.define('teacher_faculties', {
    teacherId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
            model: db.teacher,
            key: 'id'
        }
    },
    facultyId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
            model: db.facultie,
            key: 'id'
        }
    }
});

db.user.belongsToMany(db.role, { through: UserRoles });
db.role.belongsToMany(db.user, { through: UserRoles });

db.teacher.belongsToMany(db.facultie, { through: TeacherFaculties });
db.facultie.belongsToMany(db.teacher, { through: TeacherFaculties });

db.facultie.hasMany(db.group);
db.group.belongsTo(db.facultie);

db.user.hasOne(db.teacher, { 
    foreignKey: 'id',
    as: 'users',
    onUpdate: "cascade", 
    onDelete: "cascade" 
});
db.teacher.belongsTo(db.user, {
    foreignKey: 'id',
    as: 'users',
    onUpdate: "cascade", 
    onDelete: "cascade"
});

db.ROLES = ["user", "moderator", "admin"];

module.exports = db;