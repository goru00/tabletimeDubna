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

const UserRoles = sequelize.define('user_roles', {
    userId: {
        type: Sequelize.DataTypes.STRING,
        references: {
            model: db.user,
            key: 'id'
        }
    },
    roleId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: db.role,
            key: 'id'
        }
    }
});

const TeacherDisciplines = sequelize.define('teacher_discipline', {
    teacherId: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: db.teacher,
            key: 'id'
        }
    },
    disciplineId: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: db.discipline,
            key: 'id'
        }
    },
    facultieId: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: db.facultie,
            key: 'id'
        }
    },
    groupId: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: db.group,
            key: 'id'
        }
    }
});

db.teacher.belongsToMany(db.discipline, { through: TeacherDisciplines });
db.discipline.belongsToMany(db.teacher, { through: TeacherDisciplines });

db.user.belongsToMany(db.role, { through: UserRoles });
db.role.belongsToMany(db.user, { through: UserRoles });

db.facultie.hasMany(db.group, {
    foreignKey: 'facultieId',
    as: 'faculties',
    onUpdate: "cascade",
    onDelete: "cascade"
});
db.group.belongsTo(db.facultie, {
    foreignKey: 'facultieId',
    as: 'faculties',
    onUpdate: "cascade",
    onDelete: "cascade"
});

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